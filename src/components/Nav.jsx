import styles from './styles/Nav.module.scss';

import hamburger from '../assets/images/icon-hamburger.svg';
import logo from '../assets/images/logo.svg';

const Nav = () => {
  return (
    <nav className={styles['nav-container']}>
      <img src={logo} alt='blogr logo' role='presentation' />
      <button className={styles.btn}>
        <img src={hamburger} alt='' aria-label='button' />
      </button>
    </nav>
  );
};

export default Nav;
