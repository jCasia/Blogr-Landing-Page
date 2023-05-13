import styles from './styles/PrimaryButton.module.scss';

const ButtonPrimary = (prop) => {
  return <button className={styles.btn}>{prop.label}</button>;
};

export default ButtonPrimary;
