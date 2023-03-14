import styles from './Button.module.css';

function Button(props) {
  const { children, disabled = false } = props;
  return (
    <button
      {...props}
      //{...props} - передает шаблону настройки дочернего обьекта которые не пеедаются в диструктуризации обьекта props выше, например  type="submit" из файла TodoForm.js. Так же можно передавать все настройки кнопки которые передаются без изменений
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
