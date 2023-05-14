import styles from './styles/Infrastructure.module.scss';
import image from '../assets/images/illustration-phones.svg';
import { infraData } from '../../data';

const Infrastructure = () => {
  const { heading, text } = infraData;
  return (
    <section className={styles.infrastructure}>
      <img src={image} alt='' />
      <div className={styles.context}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default Infrastructure;
