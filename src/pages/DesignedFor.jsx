import styles from './styles/DesignedFor.module.scss';
import image from '../assets/images/illustration-editor-mobile.svg';
import ContentPara from '../components/ContentPara';
import { data1 } from '../../data';

const DesignedFor = () => {
  return (
    <section className={styles.designedFor}>
      <h2>Designed for the future</h2>
      <img src={image} alt='' role='presentation' />
      {data1.map((data) => {
        const { heading, text, id } = data;
        return <ContentPara key={id} heading={heading} text={text} />;
      })}
    </section>
  );
};

export default DesignedFor;
