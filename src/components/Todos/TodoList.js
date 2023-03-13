import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((el, id) => (
        <TodoItem key={id} text={el} index={id} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
