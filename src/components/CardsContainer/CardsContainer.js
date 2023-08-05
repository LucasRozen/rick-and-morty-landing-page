
import React from 'react'
import Card from '../Card/Card'
import style from './CardsContainer.module.css'

const CardsContainer = ({title}) => {
  const discos = [
    {
      img: 'https://i.pinimg.com/originals/93/77/f0/9377f0ba18d3268c109711252ecdaecb.jpg',
      title: 'Habla tu espejo',
      year: 2014
    },
    {
      img: 'https://i.pinimg.com/originals/ee/6e/d3/ee6ed3f751be384cbe148109feac7d4d.jpg',
      title: 'Raro',
      year : 2006
    },
    {
      img: 'https://i.pinimg.com/originals/96/18/fb/9618fbdd48c5993a52203a1442efded9.jpg',
      title: 'Porfiado',
      year: 2005
    }
  ]
  return (
    <section id="discografia" className={style.discografia}>
      <div className="container">
          <h2>{title}</h2>
          <div className={style.grilla}>
              {discos.map(({img, title, year}) => <Card img={img} title={title} year={year}/>)}
          </div>
      </div>
    </section>
  )
}

export default CardsContainer;
