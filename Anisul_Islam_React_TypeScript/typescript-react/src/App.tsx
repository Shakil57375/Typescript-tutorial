import "./App.css"
import { User } from "./components/User";

function App() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    language : ["Bangla", "English"]
  };
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name = "Shakil Hossain" age = {21} isRegistered  = {true} language = {["Bangla", "English"]} user = {person}/>
    </div>
  );
}

export default App;
