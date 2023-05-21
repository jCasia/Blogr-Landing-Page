import styles from './styles/PrimaryButton.module.scss';

const ButtonPrimary = ({ label, customClass = '' }) => {
  return (
    <button className={`${styles.btn} ${customClass}`} type='button'>
      {label}
    </button>
  );
};

export default ButtonPrimary;
