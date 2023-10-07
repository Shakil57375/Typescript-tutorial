import "./App.css"
import Button from "./components/Button";
import { DataFetch } from "./components/DataFetch";
import { DemoUser } from "./components/DemoUser";
import { User } from "./components/User";

function App() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    language : ["Bangla", "English"]
  };
  const students = [
    {
      name: "Alice",
      age: 22,
      grade: "A"
    },
    {
      name: "Bob",
      age: 21,
      grade: "B"
    },
    {
      name: "Charlie",
      age: 23,
      grade: "C"
    }
  ];
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name = "Shakil Hossain" age = {21} isRegistered  = {true} language = {["Bangla", "English"]} user = {person}/>
      <DemoUser student = {students}/>
      <DataFetch status = {"successful"}/>
      <Button>Children sending here</Button>
    </div>
  );
}

export default App;
