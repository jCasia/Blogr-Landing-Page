import styles from './styles/SidebarDropdown.module.scss';
import { useState } from 'react';
import arrow from '../assets/images/icon-arrow-dark.svg';

const SidebarDropdown = ({ page, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles['links-container']}>
      <button className={styles.btndrop} onClick={dropdownHandler}>
        <h4>{page}</h4>

        <img
          src={arrow}
          alt='dropdown'
          style={{ transform: isDropdownOpen && 'rotate(180deg)' }}
        />
      </button>

      <ul
        className={
          isDropdownOpen
            ? `${styles.sublinks} ${styles.expand}`
            : styles.sublinks
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
