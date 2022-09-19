import { useState } from 'react'
import './App.css'
import clickOne from './assets/click1.wav'

function App() {
	const [bpm, setBPM] = useState(88)
	const [playing, setPlaying] = useState(false)

  const click1 = new Audio(clickOne)

  function playingHandler() {
    if (playing) {
      clearInterval(timer)
      setPlaying(false)
    } else {
      let timer = setInterval()
    }
    click1.play()
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
					onChange={e => setBPM(e.target.value)}
				/>
			</div>
			<button className="button" onClick={playingHandler}>{playing ? 'Stop' : 'Start'}</button>
		</div>
	)
}

export default App
