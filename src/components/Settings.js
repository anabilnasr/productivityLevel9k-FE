import React, { useContext, useState } from 'react'
import { SettingContext } from '../context/SettingsContext'
import Button from './Button'

const Settings = () => {
    const { updateExec, setTask, task } = useContext(SettingContext)
    const [t, setT] = useState({
        product: 1,
        short: 2,
        long: 3,
        active: 'product'
    })

    const changeHandler = input => {
        const { name, value } = input.target
        switch (name) {
            case 'product':
                setT({
                    ...t,
                    product: parseInt(value)
                })
                break;
            case 'short-break':
                setT({
                    ...t,
                    short: parseInt(value)
                })
                break;
            case 'long-break':
                setT({
                    ...t,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }


    const submitHandler = e => {
        e.preventDefault()
        updateExec(t)
    }
    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-container">
                    <input className="input" name="product" onChange={changeHandler} value={t.product}></input>
                    <input className="input" name="short-break" onChange={changeHandler} value={t.short}></input>
                    <input className="input" name="long-break" onChange={changeHandler} value={t.long}></input>
                </div>

                <Button title="Set" _callback={submitHandler} />
            </form>
        </div>

    )
}

export default Settings
