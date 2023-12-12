import './Session.css'
import { AiOutlineArrowDown, AiOutlineArrowUp  } from "react-icons/ai";

interface session {
    data: number,
    click: (content: string) => void
}

const Session: React.FC<session> = ({ data, click }) => {
    return (
        <div className='session'>
          <h2 id='session-label' className='session-label'>Session Length</h2>

            <div className='grid-container'>
                <button id='session-decrement' onClick={() => click('decrement')}>
                    <AiOutlineArrowDown />
                </button>
                <label id='session-length'>{data}</label>
                <button id='session-increment' onClick={() => click('increment')}>
                    <AiOutlineArrowUp />
                </button>
            </div>
        </div>
    )
}

export default Session