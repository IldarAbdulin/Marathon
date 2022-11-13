import './LearnAboutUs.scss'
import macRightSite from '../../images/learnAboutUs/macleftsite.svg'
import vector from '../../images/learnAboutUs/Vector.svg'
import play from '../../images/learnAboutUs/play.svg'

function LearnAboutUs() {
  return (
    <div className='LearnAboutUs'>
        <div className='learn-about-us'>

            <div className='learn-about-us__left-site'>
                <div className='left-site__header'>
                    <h3>Узнай о нас</h3>
                    <p>немного больше...</p>
                </div>
                <div className='left-site__title'>
                    <div className='title__first-item'>
                        <h3>Автошкола "AutoOnline" основана в 2017 году Кайратом и Асылжаном.</h3>
                        <p>Они создали первый в Казахстане сервис для онлайн обучения в автошколе. Это позволило тысячам Казахстанцев дистанционно изучить ПДД, а затем получить свидетельство автошколы.</p>
                    </div>
                    <div className='title__second-item'>
                        <h3>В 2021 году "AutoOnline" становится не просто автошколой,</h3>
                        <p>а сервисом для обучения всех курсантов из других автошкол. За первые 4 месяца 2022 года, более 2000 Казахстанцев прошли обучение по новой программе 3D видео-уроков согласно изменениям ПДД.</p>
                        <p>За весь период работы, нашим сервисом воспользовались <span>более 100 000 человек со всего Казахстана.</span></p>
                    </div>
                </div>
                <div className='left-site-footer__'>
                    <div className='left-site__footer'>
                        <div className='footer-block'>
                            <h3>Наша миссия:</h3>
                            <p>Модернизация сферы ПДД РК, создание безопасной среды дорожного движения, и изменение представления об обучении в автошколе.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='learn-about-us__right-site'>
                <img className='macright' src={macRightSite} />
                <div className='right-site__play-block'>
                    <p>Смотри видео <br /> о "AutoOnline"</p>
                    <img className='vector' src={vector} />
                    <img className='play' src={play} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default LearnAboutUs