import styles from './styles/NavLinks.module.scss';
import arrowDown from '../assets/images/icon-arrow-light.svg';
import { useGlobalContext } from '../../Context';

const NavLinks = ({ page, links, pageId }) => {
  const { toggleSingle, activeId } = useGlobalContext();

  const isActive = pageId === activeId; //true or false.

  return (
    <div className={styles['nav-links']}>
      <div className={styles.dropdownContainer}>
        <button
          className={styles['nav-link']}
          onClick={() => toggleSingle(pageId)}
        >
          {page}
          <img
            src={arrowDown}
            alt='down arrow'
            className={isActive ? styles.rotate : styles.rotateBack}
          />
        </button>
        <ul
          className={
            isActive
              ? `${styles.linkListsContainer} ${styles.toggleOpen}`
              : styles.linkListsContainer
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
    </div>
  );
};

export default NavLinks;
