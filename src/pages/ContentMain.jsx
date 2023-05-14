import DesignedFor from './DesignedFor';
import Infrastructure from './Infrastructure';
import styles from './styles/ContentMain.module.scss';

const ContentMain = () => {
  return (
    <main className={styles.main}>
      <DesignedFor />
      <Infrastructure />
    </main>
  );
};

export default ContentMain;
