import { React, useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigation, useLocation } from 'react-router-dom';

import axios from '../../api/axios';
import './login.css';


const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useAuth();

    const navigate=useNavigation();
    const location=useLocation();
    const from=location.state?.from?.pathname || "/";

    const userRef=useRef();
    const errRef=useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(()=>{
        userRef.current.focus();
    }, [])
    
    useEffect(()=>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}), 
            {
                headers: {'Content-Type' : 'application/json'},
                withCredentials:true
            });
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({user, pwd, roles, accessToken});
            setUser('');
            setPwd('');
            navigate(from, {replace:true});
        } catch (err) {
            if (!err?.response){
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400){
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            } else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='login-form'>
            <p ref={errRef} className={errMsg? 'errmsg':'offscreen'} aria-live='assertive'>{errMsg}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">ПОШТА</label>
                <input 
                    type="email" 
                    id="email" 
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e)=>setUser(e.target.value)}
                    value={user}
                    placeholder='email@example.com'
                    required
                />

                <label htmlFor="password">ПАРОЛЬ</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e)=>setPwd(e.target.value)}
                    value={pwd}
                    placeholder='password'
                    required
                />
                <button className='button-form'>Увійти</button>
            </form>
            <div className='links'>
                <a href="#" className='link-form'>Забув пароль?</a>
                <a href="#" className='link-form'>Немає аккаунту</a>
            </div>
        </div>
    )
}

export default Login