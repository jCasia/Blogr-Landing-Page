import DesignedFor from './DesignedFor';
import FreeOpen from './FreeOpen';
import Infrastructure from './Infrastructure';
import styles from './styles/ContentMain.module.scss';

const ContentMain = () => {
  return (
    <main className={styles.main}>
      <DesignedFor />
      <Infrastructure />
      <FreeOpen />
    </main>
  );
};

export default ContentMain;
