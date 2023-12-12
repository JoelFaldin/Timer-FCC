import './Break.css'
import { AiOutlineArrowDown, AiOutlineArrowUp  } from "react-icons/ai";

interface forBreak {
    handle: number,
    click: (content: string) => void
}

const Break: React.FC<forBreak> = ({ handle, click }) => {
    return (
        <div className='break'>
          <h2 id='break-label' className='break-label'>Break Length</h2>

          <div className='grid-container'>
            <button id='break-decrement' onClick={() => click('decrement')}>
                <AiOutlineArrowDown />
            </button>
            <label id='break-length'>{handle}</label>
            <button id='break-increment' onClick={() => click('increment')}>
                <AiOutlineArrowUp />
            </button>
          </div>
        </div>
    )
}

export default Break