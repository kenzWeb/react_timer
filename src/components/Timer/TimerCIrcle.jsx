import React, { useEffect, useState } from 'react'
import { getPadTime } from './GetPadTime'

function TimerCircle(props) {
	const [timeLeft, setTimeLeft] = useState(props.timerCounterPomadoro * 60)
	const [isCounting, setIsCounting] = useState(false)

	const minutes = getPadTime(Math.floor(timeLeft / 60))
	const seconds = getPadTime(timeLeft - minutes * 60)

	useEffect(() => {
		const interval = setInterval(() => {
			isCounting && setTimeLeft(timeLeft => (timeLeft >= 1 ? timeLeft - 1 : 0))
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [isCounting])

	const handleStart = () => {
		setIsCounting(true)
	}

	const handleStop = () => {
		setIsCounting(false)
	}

	const handleRestart = () => {
		setIsCounting(true)
		setTimeLeft(props.timerCounterPomadoro * 60)
	}

	const circleStyles = {
		strokeDashoffset:
			props.timerCounterPomadoro > 0
				? Math.PI * 310 * (1 - timeLeft / (props.timerCounterPomadoro * 60))
				: 0,
		transition: 'stroke-dashoffset 0.5s ease-in-out',
	}

	return (
		<div className='time__timer-wrapper'>
			<div className='timer__circle'>
				<div className='timer__circle-wrapper'></div>
				<div className='timer__circle-first'></div>
				<div className='timer__circle-progressbar'>
					<svg>
						<circle
							className='timer__circle-bar'
							style={circleStyles}
							cx='160'
							cy='160'
							r='155'
						></circle>
						<circle
							className='timer__circle-bar'
							style={circleStyles}
							cx='160'
							cy='160'
							r='155'
						></circle>
					</svg>
					<div className='timer__timer flex flex-col items-center'>
						<div>
							<span className='timer-time'>{minutes}</span>
							<span className='timer-time'>:</span>
							<span className='timer-time'>{seconds}</span>
						</div>
						{timeLeft === 0 ? (
							<button onClick={handleRestart}>RESTART</button>
						) : isCounting ? (
							<button onClick={handleStop}>STOP</button>
						) : (
							<button onClick={handleStart}>START</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TimerCircle
