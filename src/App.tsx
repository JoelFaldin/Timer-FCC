import { useEffect, useState } from 'react'
import './App.css'
import Break from './Components/Break/Break'
import Session from './Components/Session/Session'
import Timer from './Components/Timer/Timer'
import audio from './assets/alarm.mp3'

function App() {
  const [breakTime, setBreakTime] = useState<string>('5')
  const [sessionTime, setSessionTime] = useState<string>('25')
  const [time, setTime] = useState<string>('00:00')
  const [state, setState] = useState<boolean>(false)
  const [current, setCurrent] = useState<string>('session')

  // Separating 'time' to seconds:
  const [minutes, seconds] = time.split(':').map(Number)
  let totalSeconds = minutes * 60 + seconds

  // Formatting to mm:ss:
  useEffect(() => {
    const number = Number(sessionTime)
    const date = new Date(number * 60000)
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const formated = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    setTime(formated)
  }, [sessionTime])

  useEffect(() => {
    let interval: number
    
    if (!state) return;
    if (state) {
      interval = window.setInterval(countdown, 1000)
    }

    return () => {
      window.clearInterval(interval)
    }
  }, [state])

  const handleClick = () => {
    setState(prev => prev === true ? false : true)
  }

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

  const countdown = () => {
      if (state === true) {
          if (totalSeconds > 0) {
            totalSeconds--
            formatFromSeconds(totalSeconds)
          } else {
            setCurrent(prev => prev === 'session' ? 'break' : 'session')
            totalSeconds = current === 'session' ? Number(breakTime) * 60 : Number(sessionTime) * 60
            formatFromSeconds(totalSeconds)
            console.log('this happens when it finishes')
            
            const audio = document.getElementById('beep') as HTMLAudioElement
            audio.play()
          }
        }
  }

  const formatFromSeconds = (seconds: number) => {
    let minutes = Math.floor(seconds / 60)
    const finalMinutes = minutes < 10 ? '0' + minutes.toString() : minutes
    let newSeconds = seconds % 60
    const finalSeconds = newSeconds < 10 ? '0' + newSeconds.toString() : newSeconds
    
    setTime(`${finalMinutes}:${finalSeconds}`)
  }

  const reset = () => {
    setState(false)
    setBreakTime('5')
    setSessionTime('25')
    setTime('25:00')
    setCurrent('session')
    const audio = document.getElementById('beep') as HTMLAudioElement
    audio.pause()
    audio.currentTime = 0
  }

  return (
    <div>
      <h1 className='title'>FCC 25+5 Clock</h1>
      <p className='mini-text'>Built with <i className='vite'>Vite</i> + <i className='react'>React</i></p>

      <section className='config-section'>
        <Break handle={breakTime} click={handleBreak} />
        <Session data={sessionTime} click={handleSession} />
      </section>
      <section className='timer-section'>
        <Timer reset={reset} time={time} click={handleClick} state={state} current={current} />
        <audio id='beep' src={audio}></audio>
      </section>
    </div>
  )
}

export default App
