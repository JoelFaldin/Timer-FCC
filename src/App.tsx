import { useState } from 'react'
import './App.css'
import Break from './Components/Break/Break'
import Session from './Components/Session/Session'

function App() {
  const [breakTime, setBreakTime] = useState<number>(5)
  const [sessionTime, setSessionTime] = useState<number>(25)

  const handleBreak = (event: string) => {
    const data = event

    // Updating breakTime based on data:
    data === 'decrement' ? setBreakTime(prev => prev - 1) : setBreakTime(prev => prev + 1)
  }

  const handleSession = (event: string) => {
    const data = event

    // Updating sessionTime based on data:
    data === 'decrement' ? setSessionTime(prev => prev - 1) : setSessionTime(prev => prev + 1)

  }

  const reset = () => {
    console.log('timer reset!')
  }

  return (
    <div>
      <h1 className='title'>FCC 25+5 Clock</h1>
      <p className='mini-text'>Built with Vite + React</p>
      <section className='config-section'>
        <Break handle={breakTime} click={handleBreak} />
        <Session data={sessionTime} click={handleSession} />
      </section>
      <section className='timer-section'>
        <label id='timer-label'>Session</label>
        <label id='time-left'></label> {/* Format this label */}
        <button id='start_stop'></button>
        <button id='reset' onClick={reset}></button>
        
      </section>
    </div>
  )
}

export default App
