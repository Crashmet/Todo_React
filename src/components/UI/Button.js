import styles from './Button.module.css';

function Button(props) {
  const { children, onClick, title, disabled = false } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
