import { selectUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(selectUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}
