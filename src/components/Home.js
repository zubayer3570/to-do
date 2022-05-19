import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Card from './Card';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [toDoList, setToDoList] = useState([])
    const [updateState, setUpdateState] = useState('')
    const [showCompletedToast, setShowCompletedToast] = useState('')
    const [showDeletedToast, setShowDeletedToast] = useState('')
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`https://to-do-back-end.herokuapp.com/list?email=${user.email}`)
                .then(res => res.json())
                .then(data => setToDoList(data))
        }
    }, [user, updateState])
    if (showCompletedToast) {
        toast(`${showCompletedToast.taskName} Task Completed!!!`)
        setShowCompletedToast('')
    }
    if (showDeletedToast) {
        toast(`${showDeletedToast.taskName} Task Deleted`)
        setShowDeletedToast('')
    }
    return (
        <>
            <Header />
            {
                toDoList ?
                    <div className='grid grid-cols-3 p-8'>
                        {toDoList.map(list => <Card
                            key={list._id}
                            task={list}
                            setUpdateState={setUpdateState}
                            setShowCompletedToast={setShowCompletedToast}
                            setShowDeletedToast={setShowDeletedToast}
                        />)}
                    </div>
                    :
                    <div className='h-[60vh] flex flex-col items-center justify-center'>
                        <h1 className='text-black font-bold text-4xl mb-8'>You Haven't added any task Yet!</h1>
                        <Link to='/addwork' className='btn btn-dark text-white font-bold text-xl'>Add Task +</Link>
                    </div>

            }
            <ToastContainer />
        </>
    );
};

export default Home;