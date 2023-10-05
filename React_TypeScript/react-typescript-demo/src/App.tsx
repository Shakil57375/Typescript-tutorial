import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";

const App = () => {
  const PersonName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Lee",
    },
    {
      first: "Clark",
      last: "Enn",
    },
    {
      first: "Prince",
      last: "Gee",
    },
  ];
  return (
    <div className="App">
      <Greet name="bangladesh" messageCount={10} isLoggedIn={false} />
      <Person name={PersonName} />
      <PersonList names = {nameList} />
    </div>
  );
};

export default App;
