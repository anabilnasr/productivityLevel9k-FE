import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';

export default function ListOfTodo({ token }) {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        if (token) {
            fetchData(token);
        }
    }, [token]);

    const fetchData = async (token) => {
        const res = await axios.get('http://localhost:5000/api/todos', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        setTasks(res.data.tasks);
        console.log(tasks);
    };

    return (
        <div>
            <ul style={{ listStyleType: 'none' }}>
                {tasks.map(task => (
                    <li key={task.title}>
                        <TaskCard data={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
}