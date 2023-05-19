import { dataLinks } from '../../data';
import styles from './styles/NavLinks.module.scss';
import arrowDown from '../assets/images/icon-arrow-light.svg';

const NavLinks = () => {
  return (
    <div className={styles['nav-links']}>
      {dataLinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button key={pageId} className={styles['nav-link']}>
            {page}
            <img src={arrowDown} alt='down arrow' />
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
