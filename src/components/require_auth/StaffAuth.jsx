import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const StaffAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();

  return (
    auth?.is_staf
        ?<Outlet />
        :<Navigate to = "/login" state={{from:location}} replace />
  )
}

export default StaffAuth