import styles from './styles/Header.module.scss';

import hamburger from '../assets/images/icon-hamburger.svg';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt='blogr logo' role='presentation' />
      <button className={styles.btn}>
        <img src={hamburger} alt='' aria-label='button' />
      </button>
    </header>
  );
};

export default Header;
