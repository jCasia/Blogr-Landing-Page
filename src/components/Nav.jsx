import { useGlobalContext } from '../../Context';
import Sidebar from './Sidebar';
import styles from './styles/Nav.module.scss';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';

const Nav = () => {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <nav>
      <div className={styles['nav-container']}>
        <img src={logo} alt='blogr logo' role='presentation' />
        <button className={styles.btn} onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <img src={close} alt='button' aria-label='button' />
          ) : (
            <img src={hamburger} alt='button' aria-label='button' />
          )}
        </button>
      </div>
      <Sidebar />
    </nav>
  );
};

export default Nav;
