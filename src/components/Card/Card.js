import React from 'react'
import styles from './Card.module.css'


const Card = ({img,title,year}) => {
  return (
    <article className={styles.card}>
      <img src={img} alt={title}></img>
      <div className={styles.card_info}>
          <h3>{title}</h3>
          <p>{year}</p> 
      </div> 
    </article>    
  )
}

export default Card