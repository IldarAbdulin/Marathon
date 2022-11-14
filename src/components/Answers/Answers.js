import './Answers.scss'
import AnswersProps from './AnswersProps'
import clouds1 from '../../images/header/clouds1.svg'
import clouds2 from '../../images/header/clouds2.svg'

function Answers() {

    const answers = [
        {
            header: 'А Кто может быть участником марафона?',
            title: 'Участником марафона может быть любой гражданин РК достигший 16 лет.',
        },
        {
            header: 'Сколько всего длится марафон?',
            title: 'Марафон будет длиться 7 часов'
        },
        {
            header: 'Сколько стоит участие в марафоне?',
            title: 'Все абсолютно бесплатно'
        },
        {
            header: 'Что я получу от марафона?',
            title: 'Призы и крутые подарки'
        },
        {
            header: 'Как будет проводится марафон?',
            title: 'А вот это в узнаете на месте'
        }
    ]

  return (
    <div className='answers'>
        <div className='answers__header'>
            <h3>Остались вопросы?</h3>
            <p>здесь ты найдёшь ответы</p>
        </div>
        {
            answers.map((answer) => (
                <AnswersProps 
                    header={answer.header} 
                    title={answer.title}
                />
            ))
        }
        <div className='clouds'>
            <img className='firstCloud' src={clouds1} alt='4'/>
            <img className='secondCloud' src={clouds2} alt='4'/>
        </div>
    </div>
  )
}
export default Answers