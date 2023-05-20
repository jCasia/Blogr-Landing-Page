import { useGlobalContext } from '../../Context';
import Sidebar from './Sidebar';
import styles from './styles/Nav.module.scss';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';
import logo from '../assets/images/logo.svg';
import NavLinks from './NavLinks';
import ButtonPrimary from './ButtonPrimary';
import { dataLinks } from '../../data';

const Nav = () => {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <nav>
      {/* desktop */}
      <div className={styles['nav-container']}>
        <div className={styles['links-container']}>
          <img
            src={logo}
            alt='blogr logo'
            role='presentation'
            aria-label='blogr-logo'
          />
          {dataLinks.map((item) => {
            return <NavLinks {...item} key={item.pageId} />;
          })}
        </div>
        <div className={styles.desktopbtnContainer}>
          <a href='#' className={styles.login}>
            Login
          </a>
          <ButtonPrimary label='Sign Up' customClass={styles.signbtn} />
        </div>
        {/* mobile */}
        <button className={styles.mobilebtn} onClick={toggleSidebar}>
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
