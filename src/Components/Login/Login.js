import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
      .then(result => {
      history.push(redirect_uri)
    })
    }
    return (
        <div className="login">
            <h2>Please Login</h2>
            <Button onClick={handleGoogleLogin} className="btn-regular btn-primary mb-5">Google Sign In</Button>
        </div>
    );
};

export default Login;