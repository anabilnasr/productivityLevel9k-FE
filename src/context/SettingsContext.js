import React, { createContext, useState } from 'react'
export const SettingContext = createContext();

const SettingsContextProvider = (props) => {

    const [productivity, setProductivity] = useState(0)
    const [exec, setExec] = useState({})
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({
        title: "input task title",
        description: "task description example...",
        time: 1,
        time_elapsed: 0,
        active: 0
    })
    const [token, setToken] = useState("")
    const [animation, setAnimation] = useState(false)

    function startAnimation() {
        setAnimation(true)
    }
    function pauseAnimation() {
        setAnimation(false)
    }
    function stopAnimation() {
        setAnimation(false)
    }

    const SettingButton = () => {
        setExec({})
        setProductivity(0)
    }

    const setTimerTime = (evaluate) => {
        switch (evaluate.active) {
            case 'product':
                setProductivity(evaluate.product)
                break;
            case 'short':
                setProductivity(evaluate.short)
                break;
            case 'long':
                setProductivity(evaluate.long)
                break;
            default:
                setProductivity(0)
                break;
        }
    }

    const updateExec = updatedSettings => {
        setExec(updatedSettings)
        setTimerTime(updatedSettings)
    }

    function setCurrentTimer(active_state) {
        updateExec({
            ...exec,
            active: active_state
        })
        setTimerTime(exec)
    }

    const setProductTimer = e => {
        updateExec({
            ...exec,
            active: 'product'
        })
        setTimerTime(exec)
        e.preventDefault()
    }

    const setShortTimer = e => {
        updateExec({
            ...exec,
            active: 'short'
        })
        setTimerTime(exec)
        e.preventDefault()
    }

    const setLongTimer = e => {

        updateExec({
            ...exec,
            active: 'long'
        })
        setTimerTime(exec)
        e.preventDefault()
    }




    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        return `${minutes}:${seconds}`
    }

    return (
        <SettingContext.Provider
            value={{
                stopAnimation,
                updateExec,
                startAnimation,
                stopAnimation,
                pauseAnimation,
                SettingButton,
                setCurrentTimer,
                updateExec,
                children,
                setProductTimer,
                setShortTimer,
                setLongTimer,
                setTask,
                setTasks,
                tasks,
                task,
                productivity,
                exec,
                animation,
                token,
                setToken
            }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingsContextProvider;
