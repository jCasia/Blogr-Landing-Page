import styles from './styles/SidebarDropdown.module.scss';
import arrow from '../assets/images/icon-arrow-dark.svg';
import { useGlobalContext } from '../../Context';

const SidebarDropdown = ({ page, links, pageId }) => {
  const { toggleSingle, activeId } = useGlobalContext();

  const isActive = pageId === activeId; //true or false.

  return (
    <div className={styles['links-container']}>
      <button className={styles.btndrop} onClick={() => toggleSingle(pageId)}>
        <h4>{page}</h4>

        <img
          src={arrow}
          alt='dropdown'
          style={{ transform: isActive && 'rotate(180deg)' }}
        />
      </button>

      <ul
        className={
          isActive ? `${styles.sublinks} ${styles.expand}` : styles.sublinks
        }
      >
        {links.map((link) => {
          const { id, label, url } = link;
          return (
            <li key={id}>
              <a href={url}>{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarDropdown;
