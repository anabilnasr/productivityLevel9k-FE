import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'

const TimerAnimation = ({ key = 1, timer = 20, animate = true, children }) => {
    const { stopAnimation } = useContext(SettingContext)
    return (
        <CountdownCircleTimer
            key={key}
            isPlaying={animate}
            duration={timer * 60}
            colors={
                [['#0004777', 0.33]],
                [['#F7B801', 0.33]],
                [['#A30000', 0.33]]
            }
            strokeWidth={6}
            size={220}
            trailColor={[["#151932"]]}
            onComplete={() => {
                stopAnimation()
            }}
        >
            {children}
        </CountdownCircleTimer>
    )
}

export default TimerAnimation
