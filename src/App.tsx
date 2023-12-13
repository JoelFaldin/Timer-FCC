import { useState } from 'react'
import './App.css'
import Break from './Components/Break/Break'
import Session from './Components/Session/Session'
import Timer from './Components/Timer/Timer'

function App() {
  const [time, setTime] = useState<string>('0')
  const [breakTime, setBreakTime] = useState<string>('5')
  const [sessionTime, setSessionTime] = useState<string>('25')

  const handleBreak = (event: string) => {
    const data = event

    if (data === 'decrement' && breakTime === '1') {
      return '';
    }
    // Updating breakTime based on data:
    data === 'decrement' ? setBreakTime(prev => (Number(prev) - 1).toString()) : setBreakTime(prev => (Number(prev) + 1).toString())
  }

  const handleSession = (event: string) => {
    const data = event

    if (data === 'decrement' && sessionTime === '1') {
      return '';
    }
    // Updating sessionTime based on data:
    data === 'decrement' ? setSessionTime(prev => (Number(prev) - 1).toString()) : setSessionTime(prev => (Number(prev) + 1).toString())

  }

  const reset = () => {
    setBreakTime('5')
    setSessionTime('25')
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
        <Timer reset={reset} />
      </section>
    </div>
  )
}

export default App
