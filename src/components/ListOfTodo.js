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
        const res = await axios.get('http://localhost:5000/tasks', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        console.log(res.data)
        setTasks(res.data);
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
