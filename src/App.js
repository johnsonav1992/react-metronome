import { useState } from 'react'
import './App.css'
import clickSound from './assets/click1.wav'

function App() {
	const [bpm, setBPM] = useState(88)
	const [playing, setPlaying] = useState(false)
	const [timer, setTimer] = useState('')

	const click = new Audio(clickSound)

	function playClick() {
		click.play()
	}

	function startStop() {
		if (playing) {
			setTimer(clearInterval(timer))
			setPlaying(false)
		} else {
			setTimer(setInterval(playClick, (60 / bpm) * 1000))
			setPlaying(true)
		}
	}

	function handleBPMChange(e) {
		if (playing) {
			setBPM(e.target.value)
			setTimer(clearInterval(timer))
			setTimer(setInterval(playClick, (60 / bpm) * 1000))
		} else {
			setBPM(e.target.value)
		}

	}

	return (
		<div className="met-container">
			<h1>React Metronome</h1>
			<div className="bpm-text">{bpm} BPM</div>
			<div className="bpm-slider">
				<input
					type="range"
					min="60"
					max="240"
					id="slider"
					value={bpm}
					onChange={handleBPMChange}
				/>
			</div>
			<button className="button" onClick={startStop}>
				{playing ? 'Stop' : 'Start'}
			</button>
		</div>
	)
}

export default App
