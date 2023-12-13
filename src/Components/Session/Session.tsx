import './Session.css'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface session {
    data: string,
    click: (content: string) => void
}

const Session: React.FC<session> = ({ data, click }) => {
    return (
        <div className='session'>
            <h2 id='session-label' className='session-label'>Session Length</h2>
            
            <div className='grid-container'>
                <a id='session-decrement' onClick={() => click('decrement')} title='decrease'>
                    <AiOutlineCaretDown />
                </a>
                <label id='session-length'>{data}</label>
                <a id='session-increment' onClick={() => click('increment')} title='increase'>
                    <AiOutlineCaretUp />
                </a>
            </div>
        </div>
    )
}

export default Session