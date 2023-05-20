import styles from './styles/DesignedFor.module.scss';
import imageMobile from '../assets/images/illustration-editor-mobile.svg';
import imageDesktop from '../assets/images/illustration-editor-desktop.svg';
import ContentPara from '../components/ContentPara';
import { dataDesignFor } from '../../data';

const DesignedFor = () => {
  return (
    <section className={styles.designedFor}>
      <img
        src={imageDesktop}
        alt='editor illustration'
        role='presentation'
        aria-label='editor illustration'
        className={styles.imageDesktop}
      />
      <h2>Designed for the future</h2>
      <img
        src={imageMobile}
        alt='editor illustration'
        aria-label='editor illustration'
        role='presentation'
        className={styles.imageMobile}
      />
      <div className={styles.content}>
        {dataDesignFor.map((data) => {
          const { heading, text, id } = data;
          return <ContentPara key={id} heading={heading} text={text} />;
        })}
      </div>
    </section>
  );
};

export default DesignedFor;
