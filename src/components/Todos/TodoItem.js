import { RiTodoFill } from 'react-icons/ri';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const { text, index, deleteTodo } = props;

  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  );
}

export default TodoItem;
