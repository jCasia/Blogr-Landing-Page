import styles from './styles/NavLinks.module.scss';
import arrowDown from '../assets/images/icon-arrow-light.svg';
import { useState } from 'react';

const NavLinks = ({ page, links }) => {
  const [isLinksDropdownOpen, setIsLinksDropdownOpen] = useState(false);

  const linksDropdownHandler = () => {
    setIsLinksDropdownOpen(!isLinksDropdownOpen);
  };

  return (
    <div className={styles['nav-links']}>
      <div className={styles.dropdownContainer}>
        <button className={styles['nav-link']} onClick={linksDropdownHandler}>
          {page}
          <img
            src={arrowDown}
            alt='down arrow'
            className={isLinksDropdownOpen ? styles.rotate : styles.rotateBack}
          />
        </button>
        <ul
          className={
            isLinksDropdownOpen
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
