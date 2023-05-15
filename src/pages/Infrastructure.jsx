import styles from './styles/Infrastructure.module.scss';
import imagePhone from '../assets/images/illustration-phones.svg';
import imageCircle from '../assets/images/bg-pattern-circles.svg';
import { infraData } from '../../data';

const Infrastructure = () => {
  const { heading, text } = infraData;
  return (
    <section className={styles.infrastructure}>
      <div className={styles.background}>
        <img
          src={imageCircle}
          alt='circle'
          className={styles.circle}
          aria-hidden='true'
        />
      </div>
      <img
        src={imagePhone}
        alt='two phones'
        role='presentation'
        className={styles.phone}
      />
      <div className={styles.context}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Infrastructure;
