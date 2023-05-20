import styles from './styles/Footer.module.scss';
import { dataLinks } from '../../data';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img
        src={logo}
        alt='blogr logo'
        role='presentation'
        className={styles.logo}
      />
      {dataLinks.map((item) => {
        const { links, pageId, page } = item;
        return (
          <div key={pageId} className={styles['links-container']}>
            <h4>{page}</h4>
            <ul className={styles.sublinks}>
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
      })}
    </footer>
  );
};

export default Footer;
