import { TodoProps } from "./types";
const Todo = ({todo}: TodoProps) => {
  const { id, title, description } = todo;
  const handleDelete = (id: number) => {};
  return (
    <div>
      <article className="todo">
        <span>{id}</span>
        <p>{title}</p>
        <p>{description}</p>
        <button onClick={() => handleDelete(id)}>Delete Todo</button>
      </article>
    </div>
  );
};

export default Todo;
