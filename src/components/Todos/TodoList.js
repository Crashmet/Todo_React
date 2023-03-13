import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
