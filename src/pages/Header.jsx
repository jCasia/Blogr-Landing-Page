import ButtonPrimary from '../components/ButtonPrimary';
import Nav from '../components/Nav';
import styles from './styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles['content-container']}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className={styles['btn-container']}>
          <ButtonPrimary label='Start for Free' />
          <ButtonPrimary label='Learn More' customClass={styles.learnBtn} />
        </div>
      </div>
    </header>
  );
};

export default Header;
