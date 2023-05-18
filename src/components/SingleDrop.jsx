import styles from './styles/SingleDrop.module.scss';
import { useState } from 'react';
import arrow from '../assets/images/icon-arrow-dark.svg';

const SingleDrop = ({ pageId, page, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div key={pageId} className={styles['links-container']}>
      <button className={styles.btndrop} onClick={dropdownHandler}>
        <h4>{page}</h4>
        <img src={arrow} alt='dropdown' className={styles['img-dropdown']} />
      </button>

      <div
        className={
          isDropdownOpen
            ? `${styles.sublinks} ${styles.expand}`
            : styles.sublinks
        }
      >
        {links.map((link) => {
          const { id, label, url } = link;
          return (
            <a href={url} key={id}>
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SingleDrop;
