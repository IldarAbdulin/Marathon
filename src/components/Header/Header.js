import './Header.scss'
import logo from '../../images/header/logo.svg'
import girl from '../../images/header/girl.svg'
import tenge from '../../images/header/tenge.svg'
import vector from '../../images/header/vector.svg'
import clouds1 from '../../images/header/clouds1.svg'
import clouds2 from '../../images/header/clouds2.svg'
import blursignleft from '../../images/header/blurSignLeftSite.svg'
import blursignright from '../../images/header/blurSignRigthSite.svg'
import blurY from '../../images/header/blurY.svg'
import {Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='header__blur-bg'>

            <div className='header__top'>
                <div className='header__info-title-left'>
                    <p>Авторский онлайн-марафон <span>по ПДД Республики Казахстан</span></p>
                </div>
                <div className='header__logo'>
                    <img src={logo} alt='1'/>
                </div>
                <div className='header__info-title-right'>
                    <p>20 мая / 20:00 <span>Начало марафона</span></p>
                </div>
            </div>

            <div className='header__about'>
                <div className='about__left-site'>
                    <div className='left__seven-days'>
                        <h1>изучи ПДД за 7 дней</h1>
                        <h3>по понятным видео-урокам,</h3>
                        <p>и получи возможность <span>выиграть денежные призы</span></p>
                    </div>
                    <div className='about__online'>
                        <div className='about__blur blur'> {/*genius moment lol*/} <p>Обучение проходит онлайн в нашем сервисе видео-уроков.</p></div>
                        <p>Обучение проходит онлайн в нашем сервисе видео-уроков.</p>
                        <img src={blursignleft} alt='5'/>
                    </div>
                    <div className='about__link'>
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
                </div>
                <div className='about__right-site'>
                    <img className='girls' src={girl} alt='2'/>
                    <img className='blurY' src={blurY} alt='6'/>
                    <img className='blurRight' src={blursignright} alt='7'/>
                </div>
            </div>

            <div className='clouds'>
                <img className='firstCloud' src={clouds1} alt='4'/>
                <img className='secondCloud' src={clouds2} alt='4'/>
            </div>

        </div>

    </div>
  )
}

export default Header