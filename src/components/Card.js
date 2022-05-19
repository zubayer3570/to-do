import React, { useEffect, useState } from 'react';

const Card = ({ task, setUpdateState, setShowCompletedToast, setShowDeletedToast }) => {
    const [textStrike, setTextStrike] = useState('')
    const id = task._id

    useEffect(() => {
        if (task.strikeThrough) {
            setTextStrike('line-through')
        }
    }, [task])
    const handleDelete = () => {
        fetch('https://to-do-back-end.herokuapp.com/delete', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => res.json())
            .then(data => {
                setUpdateState(data)
                setShowDeletedToast(task)
            })
    }
    const handleCompleted = () => {
        fetch(`https://to-do-back-end.herokuapp.com/completed`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
            .then(res => {
                setTextStrike('line-through')
                setShowCompletedToast(task)
            })

    }
    return (
        <div className="card w-96 border border-4 text-neutral-content">
            <div className="card-body items-center text-center">
                <h2
                    style={{
                        textDecorationLine: `${textStrike}`,
                        color: 'black'
                    }}
                    className="card-title text-black"
                >{task.taskName}</h2>
                <p
                    style={{
                        textDecorationLine: `${textStrike}`,
                        color: 'black'
                    }}
                    className='text-black'
                >{task.description}</p>


                <div className="card-actions justify-end">
                    <button onClick={handleCompleted} className="btn btn-primary">Completed</button>
                    <button onClick={handleDelete} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Card;