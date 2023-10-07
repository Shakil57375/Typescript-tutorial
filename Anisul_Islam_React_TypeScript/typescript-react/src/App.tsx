import "./App.css";
import Button from "./components/Button";
import ButtonStyle from "./components/ButtonStyle";
import CurrentUser from "./components/CurrentUser";
import { DataFetch } from "./components/DataFetch";
import { DemoUser } from "./components/DemoUser";
import NewUser from "./components/NewUser";
import Post from "./components/Post";
import { User } from "./components/User";
import UseState from "./components/useState/UseState";

function App() {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    language: ["Bangla", "English"],
  };
  const students = [
    {
      name: "Alice",
      age: 22,
      grade: "A",
    },
    {
      name: "Bob",
      age: 21,
      grade: "B",
    },
    {
      name: "Charlie",
      age: 23,
      grade: "C",
    },
  ];
  return (
    <div className="App">
      <h1>User Management</h1>

      <User
        name="Shakil Hossain"
        age={21}
        isRegistered={true}
        language={["Bangla", "English"]}
        user={person}
      />
      <DemoUser student={students} />
      <DataFetch status={"successful"} />
      {/* //! children prop */}
      <p className="center">Children Prop</p>
      <Button>Click me 3</Button>
      {/* //! children prop */}
      <Post />
      {/* Style props */}
      <ButtonStyle
        style={{ backgroundColor: "red", padding: "0.5rem", color: "white" }}
      />
      {/* useState Hook */}
      <UseState />
      {/* Typing events */}
      {/* Event type set */}
      <p className="center">Event typing</p>
      <NewUser />
      <p className="center">Typing From Event</p>
      <CurrentUser/>
    </div>
  );
}

export default App;
