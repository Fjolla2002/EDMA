import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ user }) => {
  return user === "1" ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
