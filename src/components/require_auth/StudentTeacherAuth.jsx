import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const StudentTeacherAuth = ({allowedRoles}) => {
    const {auth}=useAuth();
    const location=useLocation();

  return (
    auth?.role?.find(role=>allowedRoles?.includes(role))
      ?<Outlet/>
      :<Navigate to="/login" state={{from:location}} replace />
  );
}

export default StudentTeacherAuth;