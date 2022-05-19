import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Header from './Header';

const AddWork = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const handleAdd = (e) => {
        e.preventDefault()
        const email = user.email
        const taskName = e.target.taskName.value
        const description = e.target.description.value
        const task = { email, taskName, description }
        fetch('https://to-do-back-end.herokuapp.com/addwork', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ task })
        })
            .then(res => navigate('/'))
    }
    return (
        <>
            <Header />
            <div className='h-[80vh] flex justify-center items-center'>
                <form onSubmit={handleAdd} className="bg-[#fecaca] rounded-md p-12">
                    <h1 className='text-4xl font-bold text-center mb-8'>Add a Task!</h1>
                    <input type="text" name='taskName' placeholder="Task Name" className="input input-bordered w-80" />
                    <br />
                    <textarea type='text' placeholder='Write task description here' name="description" cols="30" rows="5" className="rounded-lg w-80 my-4 outline-none p-4"></textarea>
                    <br />
                    <input type="submit" value='Add to the List' className="btn btn-primary font-bold text-white" />
                </form>
            </div>
        </>
    );
};

export default AddWork;