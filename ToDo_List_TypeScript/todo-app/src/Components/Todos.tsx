import Todo from "./Todo";
import { TodosProps } from "./TodosType";

const Todos = ({ todos }: TodosProps) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
};

export default Todos;
