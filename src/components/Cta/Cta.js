import React from 'react'
import styles from './Cta.module.css'

function Cta({title, txtBtn}) {
  return (
    <section id="biografia" className={styles.cta}>
      <div className="container">
          <h2>{title}</h2>
          <a href="#biografia" className={styles.btn_primary}>{txtBtn}</a>
      </div>
    </section>
  )
}

export default Cta