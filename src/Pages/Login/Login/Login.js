import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="log">
            <h1>Please Login To Visit Our Place</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google sign in</button>
        </div>
    );
};

export default Login;