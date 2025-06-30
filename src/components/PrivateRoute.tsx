import { Navigate, Outlet } from 'react-router';
import { user } from '../config/user';

export default function PrivateRoute() {
  if (user) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}
