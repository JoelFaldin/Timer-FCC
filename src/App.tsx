import { useEffect, useState } from 'react'
import './App.css'
import Break from './Components/Break/Break'
import Session from './Components/Session/Session'
import Timer from './Components/Timer/Timer'

function App() {
  const [breakTime, setBreakTime] = useState<string>('5')
  const [sessionTime, setSessionTime] = useState<string>('25')
  const [time, setTime] = useState<string>('00:00')
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    const number = Number(sessionTime)
    const date = new Date(number * 60000)
    // Minutes and seconds:
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    // Format the time:
    const formated = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    setTime(formated)
  }, [sessionTime])

  const handleBreak = (event: string) => {
    const data = event

    if (data === 'decrement' && breakTime === '1') {
      return '';
    } else if (data === 'increment' && breakTime === '60') {
      return ''
    }
    // Updating breakTime based on data:
    data === 'decrement' ? setBreakTime(prev => (Number(prev) - 1).toString()) : setBreakTime(prev => (Number(prev) + 1).toString())
  }

  const handleSession = (event: string) => {
    const data = event

    if (data === 'decrement' && sessionTime === '1') {
      return '';
    } else if (data === 'increment' && sessionTime === '60') {
      return ''
    }
    // Updating sessionTime based on data:
    data === 'decrement' ? setSessionTime(prev => (Number(prev) - 1).toString()) : setSessionTime(prev => (Number(prev) + 1).toString())
  }

  const handleClick = () => {
    // Separating 'time' to seconds:
    const [minutes, seconds] = time.split(':').map(Number)
    let totalSeconds = minutes * 60 + seconds

    const countdownFunction = () => {
      if (totalSeconds > 0) {
        totalSeconds--
        formatFromSeconds(totalSeconds)
      } else {
        // clearInterval(countdown)
        console.log('it finished!')
      }
    }

    // let countdown = setInterval(countdownFunction(), 1000)


    if (active === false) {
      console.log('it shall start now');
      // countdown = countdownFunction()
      setActive(true)
    } else if (active === true) {
      console.log('it shall stop now');
      setActive(false)
    }

  }

  const formatFromSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const newSeconds = seconds % 60
    setTime(`${minutes}:${newSeconds}`)
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
        <Timer reset={reset} time={time} click={handleClick} />
      </section>
    </div>
  )
}

export default App
