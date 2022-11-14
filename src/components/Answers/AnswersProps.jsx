import { useState } from 'react'
import close from '../../images/icons/close.svg'
import add from '../../images/icons/add.svg'

function AnswersProps({header, title}) {

    const [active, setActive] = useState(false);

    return (
        <div className='answer'>
            <div className='answer__head'>
                <h3>{header}</h3>
                <img onClick={() =>  setActive(!active)} width={30} height={30} src={active ? close : add} />
            </div>
            <div className={active ? 'answer__title active' : 'answer__title'}>
                <p>{title}</p>
            </div>
        </div>
    )
}
export default AnswersProps