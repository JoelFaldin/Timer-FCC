import './Timer.css'
import { AiOutlineCaretRight , AiOutlineRedo  } from 'react-icons/ai'

interface timer {
    reset: () => void,
    time: string,
    click: () => void
}

const Timer: React.FC<timer> = ({ reset, time, click }) => {
    return (
        <div className='timer'>
            <h2 id='timer-label' className='timer-title'>Current Session</h2>
            <label id='time-left' className='timer-label'>{time}</label> {/* Format this label */}

            <div className='grid-new-container'>
                <a id='start_stop' title='start' onClick={click}>
                    <AiOutlineCaretRight />
                </a>
                <a id='reset' onClick={reset} title='reset'>
                    <AiOutlineRedo />
                </a>                
            </div>

        </div>
    )
}

export default Timer