import './Advantages.scss'
import firstImg from '../../images/advantages/1.svg'
import secondImg from '../../images/advantages/2.svg'

function Advantages() {
  return (
    <div className="advantages">
        <div className='advantages__header'>
            <h3>Что ты получишь</h3>
            <p>после марафона</p>
            <em>По завершению марафона вы будете допущены на сдачу экзаменов <br /> на управление транспортных средств:</em>
        </div>
        <div className='advantages__categories-items'>
            <div className='categories-item left-item'>
                <img className='first' src={firstImg} />
                <h3>Категории а-а1</h3>
                <p>- Управление мотоциклами.</p>
                <p>- Категория А1 позволяет управлять мотоциклами с мощностью двигателя не прывышающую 125 куб, см, и макс. мощность не более 11 КвТ. </p>
                <p>- Обладатели категории А автоматически получают категорию А1</p>
            </div>
            <div className='categories-item right-item'>
                <img className='second' src={secondImg} />
                <h3>Категории b-b1</h3>
                <p>- Управление легковыми автомобилями, трициклами, квадроциклы.</p>
                <p>- Категория B дает возможность управлять легковым автомобилем, небольшими грузовиками, микроавтобусами, соответствующие некоторым требованиям. </p>
                <p>- Обладатели категории B автоматически получают категорию B1</p>
            </div>
        </div>
    </div>
  )
}

export default Advantages