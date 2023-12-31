import './Break.css'
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

interface forBreak {
    handle: string,
    click: (content: string) => void
}

const Break: React.FC<forBreak> = ({ handle, click }) => {
    return (
        <div className='break'>
          <h2 id='break-label' className='break-label'>Break Length</h2>

          <div className='grid-container-break'>
            <a id='break-decrement' onClick={() => click('decrement')}>
                <AiOutlineCaretDown />
            </a>
            <label id="break-length">{handle}</label>
            <a id='break-increment' onClick={() => click('increment')}>
                <AiOutlineCaretUp />
            </a>
          </div>
        </div>
    )
}

export default Break