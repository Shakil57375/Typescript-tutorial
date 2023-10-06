import "./App.css"
import { User } from "./components/User";

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <User name = "Shakil Hossain" age = {21} isRegistered = {true}/>
    </div>
  );
}

export default App;
