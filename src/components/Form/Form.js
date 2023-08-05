import React from 'react'
import styles from './Form.module.css'

function Form({title, desc, fields, txtBtn}) {
  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className="container">
          <h2>{title}</h2>
          <p>{desc}</p>
          <form>
              {fields.map( ({type, lbl},i) => {
                return (
                  <div key={i}>
                    <label htmlFor={type}> {lbl} </label>
                    <input type={type} id={type} name={type} required />
                  </div>
                );
              })}
              <button type="submit">{txtBtn}</button>
          </form>
      </div>
    </section>
  )
}

export default Form