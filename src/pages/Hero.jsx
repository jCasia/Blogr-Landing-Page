import ButtonPrimary from '../components/ButtonPrimary';
import Header from '../components/Header';
import styles from './styles/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles['content-container']}>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className={styles['btn-container']}>
          <ButtonPrimary label='Start for Free' />
          <ButtonPrimary label='Learn More' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
