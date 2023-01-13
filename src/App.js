import React from 'react';
import './App.css';

import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import NewPasswordPage from './pages/password/NewPasswordPage';
import ProfessorsPage from './pages/professors/ProfessorsPage';
import StudentsPage from './pages/students/StudentsPage';
import StudentsWaitingPage from './pages/students/StudentsWaitingPage';
import Generate from './pages/generate_page/GeneratePage';
import Layout from './pages/layout/Layout';
import AdminPanel from './pages/admin_panel/AdminPanel';
import RequireAuth from './components/require_auth/RequireAuth';
import StaffAuth from './components/require_auth/StaffAuth';
import StudentTeacherAuth from './components/require_auth/StudentTeacherAuth';
import StudentProfilePage from './pages/account/StudentProfilePage';
import TeacherProfilePage from './pages/account/TeacherProfilePage';
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
        
        {/* student routes */} 
        <Route element={<StudentTeacherAuth allowedRoles={['student']}/>}>     
          <Route path='/' element={<Generate/>}/>
          <Route path='professors' element={<ProfessorsPage/>}/>
          <Route path='account/student' element={<StudentProfilePage/>}></Route>
        </Route>  

        {/* teacher routes */}
        <Route element={<StudentTeacherAuth allowedRoles={['teacher']}/>}>
          <Route path='mystudents' element={<StudentsPage/>}/>
          <Route path='waitinglist' element={<StudentsWaitingPage/>}/>
          <Route path='account/teacher' element={<TeacherProfilePage/>}></Route>
        </Route>

        {/* admin routes */}
        <Route element={<StaffAuth />}>
          <Route path='adminpanel' element={<AdminPanel/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;