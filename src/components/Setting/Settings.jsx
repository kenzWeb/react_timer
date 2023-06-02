import React, { useState } from 'react'

function Settings(props) {
	const [selectedFont, setSelectedFont] = useState(null)
	const [selectedColor, setSelectedColor] = useState(null)

	const handleCloseSettings = () => {
		props.setIsSettingsOpen(false)
	}

	const handleInputChange = event => {
		props.setTimerCounterPomadoro(event.target.value)
	}

	const handleFontBlockClick = font => {
		setSelectedFont(font)
		applyFontStyle(font)
	}

	const handleColorBlockClick = color => {
		setSelectedColor(color)
		applyColorStyle(color)
	}

	const applyFontStyle = font => {
		const rootElement = document.querySelectorAll('.timer-time')
		rootElement.forEach(i => {
			i.classList.remove('font-kumbh', 'font-robotoslab', 'font-spacemono')
		})
		rootElement.forEach(i => {
			i.classList.add(`font-${font}`)
		})
	}

	const applyColorStyle = color => {
		const timerTabButton = document.querySelectorAll('.timer__tab-button')
		const timerCircle = document.querySelectorAll('.timer__circle-bar')

		function check(el) {
			el.forEach(i => {
				i.classList.remove('color-red', 'color-blue', 'color-pink')
			})

			el.forEach(i => {
				i.classList.add(`color-${color}`)
			})
		}

		check(timerTabButton)
		check(timerCircle)
	}

	return (
		<div className='settings__overlay1'>
			<div className='settings__overlay'>
				<div className='settings__wrapper'>
					<div className='settings__header'>
						<h2 className='title2 text-[#161932]'>Settings</h2>
						<button onClick={handleCloseSettings}>
							<img src='img/buttons/cross.svg' alt='' />
						</button>
					</div>
					<div className='settings__time'>
						<div className='settings__time-header'>
							<h2 className='title3'>TIME (MINUTES)</h2>
						</div>
						<div className='settings__time-checkout'>
							<div className='settings__time-block'>
								<h2 className='title6'>pomodoro</h2>
								<input
									className='settings__time-input'
									type='number'
									name='minuted'
									defaultValue={0}
									id='m'
									onChange={handleInputChange}
									value={props.ssetTimerCounterPomadoro}
								/>
							</div>
							<div className='settings__time-block'>
								<h2 className='title6'>short break</h2>
								<input
									className='settings__time-input'
									type='number'
									name='minuted'
									defaultValue={0}
									id='m'
								/>
							</div>
							<div className='settings__time-block'>
								<h2 className='title6'>long break</h2>
								<input
									className='settings__time-input'
									type='number'
									name='minuted'
									defaultValue={0}
									id='m'
								/>
							</div>
						</div>
						<div className='settings__font'>
							<h2 className='title3'>Font</h2>
							<div className='settings__font-choice'>
								<div
									onClick={() => handleFontBlockClick('kumbh')}
									className={`settings__font-block ${
										selectedFont === 'kumbh' ? 'selected' : ''
									}`}
								>
									<button className='settings__font-kumbh'>Aa</button>
								</div>
								<div
									onClick={() => handleFontBlockClick('robotoslab')}
									className={`settings__font-block ${
										selectedFont === 'robotoslab' ? 'selected' : ''
									}`}
								>
									<button className='settings__font-robotoslab'>Aa</button>
								</div>
								<div
									onClick={() => handleFontBlockClick('spacemono')}
									className={`settings__font-block ${
										selectedFont === 'spacemono' ? 'selected' : ''
									}`}
								>
									<button className='settings__font-spacemono'>Aa</button>
								</div>
							</div>
						</div>
						<div className='settings__color'>
							<h2 className='title3'>Color</h2>
							<div className='settings__color-choice'>
								<button
									onClick={() => handleColorBlockClick('red')}
									className={`settings__color-btn red ${
										selectedColor === 'red' ? 'selected' : ''
									}`}
								></button>
								<button
									onClick={() => handleColorBlockClick('blue')}
									className={`settings__color-btn blue ${
										selectedColor === 'blue' ? 'selected' : ''
									}`}
								></button>
								<button
									onClick={() => handleColorBlockClick('pink')}
									className={`settings__color-btn pink ${
										selectedColor === 'pink' ? 'selected' : ''
									}`}
								></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings
