import styles from './styles/FreeOpen.module.scss';
import laptopImage from '../assets/images/illustration-laptop-mobile.svg';
import { dataFreeOpen } from '../../data';
import ContentPara from '../components/ContentPara';

const FreeOpen = () => {
  return (
    <section className={styles.freeOpen}>
      <img src={laptopImage} alt='illustration laptop' role='presentation' />
      {dataFreeOpen.map((data) => {
        const { id, heading, text } = data;
        return <ContentPara key={id} heading={heading} text={text} />;
      })}
    </section>
  );
};

export default FreeOpen;
