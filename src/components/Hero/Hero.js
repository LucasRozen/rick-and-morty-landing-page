import React from 'react'
import styles from './Hero.module.css';

const Hero = ({titulo, descripcion, txtBtn}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <a href="#discografia" className={styles.btn_primary}>{txtBtn}</a>
      </div>
    </section>
  )
}

export default Hero