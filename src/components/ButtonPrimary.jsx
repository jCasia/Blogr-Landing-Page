import styles from './styles/PrimaryButton.module.scss';

const ButtonPrimary = ({ label, customClass = '' }) => {
  return <button className={`${styles.btn} ${customClass}`}>{label}</button>;
};

export default ButtonPrimary;
