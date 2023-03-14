import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm(props) {
  const { addTodo } = props;

  const [text, setText] = useState('');

  function hendelFormSubmit(event) {
    event.preventDefault();

    addTodo(text);

    setText('');
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={hendelFormSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Enter new todo"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" title="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
