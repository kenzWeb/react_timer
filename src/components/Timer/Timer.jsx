import React, { useState } from 'react'
import Settings from '../Setting/Settings'
import TimerCircle from './TimerCIrcle'

function Timer(props) {
	const [timerCounterPomadoro, setTimerCounterPomadoro] = useState(0)
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)

	const handleOpenSettings = () => {
		setIsSettingsOpen(true)
	}

	return (
		<section className='timer mt-12'>
			<div className='container'>
				<div className='timer__wrapper flex flex-col justify-center items-center'>
					<div className='timer__header mb-8'>
						<h1 className='title4'>pomodoro</h1>
					</div>
					<div className='timer__tab-block'>
						<div label='pomodoro' className={'timer__tab-button title5'} />
						<div label='short break' className='timer__tab-button title5' />
						<div label='long break' className='timer__tab-button title5' />
					</div>
					<div className='flex items-center'>
						<TimerCircle timerCounterPomadoro={timerCounterPomadoro} />
					</div>

					<div className='timer__settings'>
						<button className='settings__button' onClick={handleOpenSettings}>
							<img src='img/buttons/settings.svg' alt='' />
						</button>
					</div>
				</div>
			</div>
			{isSettingsOpen && (
				<Settings
					setIsSettingsOpen={setIsSettingsOpen}
					timerCounterPomadoro={timerCounterPomadoro}
					setTimerCounterPomadoro={setTimerCounterPomadoro}
				/>
			)}
		</section>
	)
}

export default Timer
