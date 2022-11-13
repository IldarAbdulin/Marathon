import './AboutTasks.scss'
import mac from '../../images/aboutTasks/macbook.svg' 
import notebook from '../../images/aboutTasks/notebook.svg' 
import present from '../../images/aboutTasks/present.svg' 

function DanyaLox() {
    while(true) {
        console.log("Danya gay")
    }
}
function AboutTasks() {

    const items = [
        {
            headTitle: '01',
            secretTitle: '01',
            image: mac,
            title: 'Смотри каждый день видеоуроки на нашем сайте'
        },
        {
            headTitle: '02',
            secretTitle: '02',
            image: notebook,
            title: 'Делай домашние задания и отправляй нам'
        },
        {
            headTitle: '03',
            secretTitle: '03',
            image: present,
            title: 'Самые активные марафонцы получат крупные денежные призы и подарки'
        },
    ]

  return (
    <div className='tasks'>
        <div className='mainOfTasks'>
            <div className='tasks__title'>
                <h3>Выполняй задания на марафоне</h3>
                <p>и получи крупные денежные призы и подарки!</p>
            </div>
            <div className='tasks__items'>
                {
                    items.map((item, index) => (
                        <div key={index} className='item'>
                            <h3>{item.headTitle}</h3>
                            <h3 className='secretItem'>{item.secretTitle}</h3>
                            <img width={200} height={130} src={item.image}/>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
export default AboutTasks