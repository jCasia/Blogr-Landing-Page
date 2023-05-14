import styles from './styles/ContentPara.module.scss';

const ContentPara = ({ heading, text }) => {
  return (
    <div className={styles['contentPar-container']}>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ContentPara;
