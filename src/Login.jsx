import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const auth = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.table({ email, password });
            try {
                const result = await fetch('https://vosovyapar.com/api/a1/user/loginViaPassword', {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await result.json();

                if (data.success) {
                    // save user data in localstorage,sessionstorage
                    // Save data in localStorage
                    toast.success("Successfully logged in!");
                    localStorage.setItem('user', JSON.stringify(data.vosoVyaparUser));
                    localStorage.setItem('token', data.accessToken);
                    localStorage.setItem('refreshToken', data.refreshToken);
                    navigate("/dashboard/home");
                    window.location.reload();
                } else {
                    toast.error(`${data.message}`);
                    // alert(`${data.message}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className='container-fluid' style={{ background: '#4B515D', minHeight: '100vh' }}>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-6'>
                    <div className="text-center">
                        <img src="https://www.bizdateup.com/static/media/raisefundhero.c6341c83d097ba07ba01.png" alt="" className="img-fluid" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="borde">
                        <div className="text-center mt-5">
                            <h2 style={{ color: '#FFFFFF' }}><b>Voso Vyapar</b></h2>
                            <p style={{ color: '#FFFFFF' }}>Welcome! Log in to your account.</p>
                        </div>
                        <form className='borde mt-5'>
                            <div className="mb-3">
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                            </div>
                            <div className="mb-5">
                                <button type="submit" className="btn btn-primary btn-block" onClick={auth}>Login</button>
                                <p className="text-center mt-3" style={{ color: '#FFFFFF' }}>OR</p>
                                <button type="submit" className="btn btn-primary btn-block">Login with OTP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
