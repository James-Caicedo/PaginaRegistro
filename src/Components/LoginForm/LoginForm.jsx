import React, { useState } from 'react'
import './LoginForm.css'
import { FaUserAlt, FaUnlockAlt, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    const loginLink = () => {
        setAction('');
    };



    return (
        <div className={`wrapper${action}`}>
            <div className='form-box login'>
                <form action="">
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaUnlockAlt className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Registrer</a></p>
                    </div>
                </form>
            </div>

            <div className='form-box registrer'>
                <form action="">
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="Email" placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Password' required />
                        <FaUnlockAlt className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type="checkbox" />I agree to the terms & conditions</label>

                    </div>
                    <button type='submit'>Register</button>

                    <div className='register-link'>
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>

        </div>





    );
};

export default LoginForm;