import React from 'react';
import './App.css';

import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import NewPasswordPage from './pages/password/NewPasswordPage';
import ProfessorsPage from './pages/professors/ProfessorsPage';
import StudentsPage from './pages/students/StudentsPage';
import Generate from './pages/generate/Generate';
import Layout from './pages/layout/Layout';
import AdminPanel from './pages/admin_panel/AdminPanel';
import RequireAuth from './components/require_auth/RequireAuth';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        {/* public routes */}
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignupPage/>}/>
        <Route path='newpassword' element={<NewPasswordPage/>}/>

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          {/* student routes */}        
          <Route path='/' element={<Generate/>}/>
          <Route path='professors' element={<ProfessorsPage/>}/>

          {/* teacher routes */}
          <Route path='mystudents' element={<StudentsPage/>}/>

          {/* admin routes */}
          <Route path='panel' element={<AdminPanel/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;