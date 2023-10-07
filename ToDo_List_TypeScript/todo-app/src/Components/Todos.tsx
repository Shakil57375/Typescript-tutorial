import Todo from "./Todo";
import { TodosProps } from "./TodosType";

const Todos = ({ todos }: TodosProps) => {
  console.log(todos);
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </section>
  );
};

export default Todos;
