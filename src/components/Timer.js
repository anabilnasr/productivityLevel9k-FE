import Settings from "./Settings";
import React, { useContext, useEffect } from "react";
import { SettingContext } from "../context/SettingsContext";
import Button from "./Button";
import TimerAnimation from "./TimerAnimation";
import axios from 'axios'
const Timer = (props) => {
    const { animation, children, SettingButton, productivity, exec, setCurrentTimer, startAnimation, pauseAnimation, stopAnimation, updateExec, setProductTimer, setShortTimer, setLongTimer, task, setTask, tasks, setTasks } = useContext(SettingContext);
    useEffect(() => { updateExec(exec) }, [exec, animation])
    useEffect(() => {
        fetchData(props.token);
    }, [])
    const fetchData = async (token) => {
        const res = await axios.get('http://localhost:5000/tasks', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        console.log(res.data)
        setTasks(res.data);
    };
    const writeData = async (token, tasks) => {
        try {
            const res = await axios.post('http://localhost:5000/tasks', {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
                body: tasks
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    const taskHandler = input => {
        const { name, value } = input.target
        switch (name) {
            case 'taskTitle':
                setTask({
                    ...task,
                    title: value
                })
                break;
            case 'taskDescription':
                setTask({
                    ...task,
                    description: value
                })
                break;
            case 'taskDuration':
                setTask({
                    ...task,
                    time: parseInt(value)
                })
                break;
            default:
                break;
        }
    }
    const submitHandler = e => {
        e.preventDefault()
        setTask({
            ...task,
            active: 1
        })
        setTasks([...tasks, task]);
        writeData(props.token, tasks);
    }

    return (
        <div className="container">
            <h1>productivityLevel9k</h1>
            <small>be productive.</small>
            {productivity !== 0 ?
                <>
                    <ul className="labels">
                        <li>
                            <Button title="Product" activeClass={exec.active === 'product' ? 'activelabel' : undefined} _callback={setProductTimer} />
                        </li>
                        <li>
                            <Button title="Short-break" activeClass={exec.active === 'short' ? 'activelabel' : undefined} _callback={setShortTimer} />
                        </li>
                        <li>
                            <Button title="Long-break" activeClass={exec.active === 'long' ? 'activelabel' : undefined} _callback={setLongTimer} />
                        </li>
                    </ul>
                    <Button title="Settings" _callback={SettingButton} />
                    <div className="time-container">
                        <div className="time-wrapper">
                            <TimerAnimation
                                key={productivity}
                                timer={productivity}
                                animate={animation}
                            >
                                {children}
                            </TimerAnimation>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <Button title="Start" className={!animation ? 'active' : undefined} _callback={startAnimation} />
                        <Button title="Pause" className={animation ? 'active' : undefined} _callback={pauseAnimation} />
                        {/* <Button title="Stop" className={!animation && 'active'} _callback={stopAnimation} /> */}
                    </div>
                    {tasks.length >= 1 &&
                        <ul style={{ listStyleType: 'none' }}>
                            {tasks.map(task => (
                                <li className="label" key={task.title}>
                                    <label>Title : {task.title} </label><br /><br />
                                    <label>Description : {task.description}   </label><br /><br />
                                    <label>Duration : {task.time}   </label><br /><br />
                                </li>
                            ))}
                        </ul>
                    }
                    <div className="label">
                        <input className="input" name="taskTitle" onChange={taskHandler} value={task.title}></input><br /><br />
                        <input className="input" name="taskDescription" onChange={taskHandler} value={task.description}></input><br /><br />
                        <input className="input" name="taskDuration" onChange={taskHandler} value={task.time}></input><br /><br />
                        <Button title="Set" _callback={submitHandler} />
                    </div>

                </> :
                <Settings />
            }
        </div>
    );
}

export default Timer;
