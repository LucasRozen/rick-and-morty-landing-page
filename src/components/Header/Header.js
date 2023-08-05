import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className={styles.header_container}>
    <nav>
      <div className={styles.logo}>
        <Link
              activeClass='active'
              className='anchor_link'
              to={'hero'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              <img src="/assets/img/logo.svg" alt="Logo" />
        </Link>
      </div>
      <ul>
        <li><Link
              activeClass='active'
              className='anchor_link'
              to={'hero'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Hero
        </Link></li>
        <li><Link
              activeClass='active'
              className='anchor_link'
              to={'cardsContainer'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Discografía
        </Link></li>
        <li><Link
              activeClass='active'
              className='anchor_link'
              to={'form'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Newsletter
        </Link></li>
        <li><Link
              activeClass='active'
              className='anchor_link'
              to={'cta'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Biografía
        </Link></li>
      </ul>
    </nav>
  </header>;
};

export default Header;
