import { useState } from "react";
import Todos from "./Components/Todos";

const App = () => {
  const todosData = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Get milk, eggs, and bread from the store."
    },
    {
      id: 2,
      title: "Finish work project",
      description: "Complete the presentation for the client meeting."
    },
    {
      id: 3,
      title: "Go for a run",
      description: "Run for 30 minutes in the park."
    },
    {
      id: 4,
      title: "Read a book",
      description: "Read the first chapter of 'The Great Gatsby.'"
    },
    {
      id: 5,
      title: "Call Mom",
      description: "Call Mom to catch up on family news."
    },
    {
      id: 6,
      title: "Clean the garage",
      description: "Organize and clean the garage this weekend."
    },
    {
      id: 7,
      title: "Write a blog post",
      description: "Draft a blog post about productivity tips."
    },
    {
      id: 8,
      title: "Plan vacation",
      description: "Research and plan a vacation for next summer."
    },
    {
      id: 9,
      title: "Fix leaky faucet",
      description: "Call a plumber to fix the leaky faucet in the kitchen."
    },
    {
      id: 10,
      title: "Learn a new language",
      description: "Start learning Spanish using online resources."
    }
  ];
  const [todos, setTodos] = useState(todosData)
  return (
    <div>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App