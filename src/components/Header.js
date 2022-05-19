import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">Daily Reminder!</Link>
            </div>
            <div className="navbar-end">
                <Link to='/' className='text-dark font-bold mx-8 text-2xl'>{user?.displayName}</Link>
                <Link to='/addwork' className='btn btn-dark mr-4'>Add Task</Link>
                <button onClick={() => {
                    signOut(auth)
                    navigate('/login')
                }}
                    className='btn btn-dark mr-8'
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Header;