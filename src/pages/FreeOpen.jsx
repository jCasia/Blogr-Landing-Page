import styles from './styles/FreeOpen.module.scss';
import laptopImageMobile from '../assets/images/illustration-laptop-mobile.svg';
import laptopImageDesktop from '../assets/images/illustration-laptop-desktop.svg';
import { dataFreeOpen } from '../../data';
import ContentPara from '../components/ContentPara';

const FreeOpen = () => {
  return (
    <section className={styles.freeOpen}>
      <img
        src={laptopImageDesktop}
        alt='illustration laptop'
        className={styles.imageDesktop}
      />
      <img
        src={laptopImageMobile}
        alt='illustration mobile'
        className={styles.imageMobile}
      />
      <div className={styles.content}>
        {dataFreeOpen.map((data) => {
          const { id, heading, text } = data;
          return <ContentPara key={id} heading={heading} text={text} />;
        })}
      </div>
    </section>
  );
};

export default FreeOpen;
