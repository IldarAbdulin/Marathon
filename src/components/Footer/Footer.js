import './Footer.scss'

function Footer() {

    const date = new Date('Jan 1 2023 00:00:00');

    const now = new Date();
    const gap = date - now;
    const days = Math.floor(gap / 1000 / 60 / 60 / 24)
    console.log(days)

  return (
    <div className="footer">
        <h3>Уже решили присоединиться?</h3>
        <p>жми кнопку и регистрируйся на марафон</p>

        <div className='footer__timer'>
            <p>Дата начала марафона 20 мая / 20:00, осталось:</p>
            <div className='timer'>
                <h3>10:</h3>
                <h3>35:</h3>
                <h3>47</h3>
            </div>
            <div className='timer__about'>
                <p>часов</p>
                <p>минут</p>
                <p>секунд</p>
            </div>
        </div>

    </div>
  )
}

export default Footer