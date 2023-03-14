import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import styles from './TodosActions.module.css';

function TodosActions(props) {
  const { resetTodos, deleteComplitedTodos, complitedTodosExist } = props;

  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos} title="Reset todos">
        <RiDeleteBin2Line />
      </Button>
      <Button
        onClick={deleteComplitedTodos}
        disabled={!complitedTodosExist}
        title="Clear complite todos"
      >
        <RiRefreshLine />
      </Button>
    </div>
  );
}

export default TodosActions;
