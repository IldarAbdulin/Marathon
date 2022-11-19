import './Footer.scss'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tenge from '../../images/header/tenge.svg'
import vector from '../../images/header/vector.svg'
import logo from '../../images/header/logo.svg'
import like from '../../images/footer/like.svg'
import inst from '../../images/footer/inst.svg'

function Footer() { 
    const [leftTimer, setLeftTimer] = useState(new Date('January 1 2023 00:00:00'));

    const now = new Date();
    const gap = leftTimer - now;
    const days = Math.floor(gap / 1000 / 60 / 60 / 24)
    const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    const minuts = Math.floor(gap / 1000 / 60) % 60;
    const seconds = Math.floor(gap / 1000) % 60

    useEffect(() => {
        setInterval(() => {
            setLeftTimer((leftTimer) => (leftTimer >= 1 ? leftTimer - 1 : 0))
        }, 1000)
    }, [])
    
  return (
    <div className="footer">
        <h3>Уже решили присоединиться?</h3>
        <p>жми кнопку и регистрируйся на марафон</p>

        <div className='footer__timer'>
            <p>Дата начала марафона 20 мая / 20:00, осталось:</p>
            <div className='timer'>
                <h3>{days} :</h3>
                <h3>{hours} :</h3>
                <h3>{minuts} :</h3>
                <h3> {seconds}</h3>
            </div>
            <div className='timer__about'>
                <p>дней</p>
                <p>часов</p>
                <p>минут</p>
                <p>секунд</p>
            </div>
            <div className='about__link'>
                <div className='link__inst'>
                    <Link><img src={inst} /></Link>
                </div>
                <Link to='/signForm'>
                    <div className='link__btn'>
                        <button className='secret-btn'>Участвовать</button>
                        <button>Участвовать</button>
                    </div>
                </Link>
                <div className='link__price'>
                    <p>Участие в марафоне абсолютно <span>бесплатно</span></p>
                </div>
                <div className='link__img'>
                    <img className='tenge' src={tenge} alt='3'/>
                    <img className='vector' src={vector} alt='3'/>
                </div>
            </div>
            <div className='footer__nav'>
                <div className='nav-left'>
                    <img src={logo} />
                </div>
                <div className='nav-center'>
                    <h3>Made with <img src={like} /> by AutoOnline</h3>
                </div>
                <div className='nav-right'>
                    <p>Все права защищены</p>
                    <Link className='link'>Политика конфендициальности</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer