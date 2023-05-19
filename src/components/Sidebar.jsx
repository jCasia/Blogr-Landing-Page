import styles from './styles/Sidebar.module.scss';
import PrimaryButton from '../components/ButtonPrimary';
import { dataLinks } from '../../data';
import { useGlobalContext } from '../../Context';
import SidebarDropdown from './SidebarDropdown';

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();

  return (
    <div
      className={
        isSidebarOpen ? `${styles.sidebar} ${styles.show}` : `${styles.sidebar}`
      }
    >
      {dataLinks.map((item) => {
        return <SidebarDropdown {...item} key={item.pageId} />;
      })}
      <hr />
      <a href='#' className={styles.login}>
        Login
      </a>
      <PrimaryButton label='Sign Up' customClass={styles.btnsign} />
    </div>
  );
};

export default Sidebar;
