import './SignInForm.scss'
import {Link} from 'react-router-dom'
import close from '../images/icons/close.svg'

function SignInForm() {
  return (
    <div className="SignInForm">
        <div className='sign-block'>
          <Link to='/'><img className='close' src={close} /></Link>
          <h3>Регистрация на марафон</h3>
          <h4>Дата начала марафона 20 мая / 20:00</h4>
          <p>Укажи свои данные в полях ниже и получи доступ к <span>бесплатному 7-ми дневному</span> марафону от Autoonline</p>
          <div className='sign-block__inputs-form'>
            <p>Ваше имя</p>
            <input type='text' placeholder='Введите ваше имя...'/>
            <p>Откуда вы?</p>
            <input type='text' placeholder='Введите город...'/>
            <p>Ваш телефон</p>
            <input type='text' placeholder='+996 ...'/>
            <p>Ваш e-mail?</p>
            <input type='text' placeholder='email@mail.com'/>
          </div>
            <div className='link__btn'>
              <button className='secret-btn'>Зарегистрироваться</button>
              <button>Зарегистрироваться</button>
            </div>
        </div>
    </div>
  )
}

export default SignInForm