import "./App.css";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import Status from "./Components/Status";

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
      {/* <Greet name="bangladesh" messageCount={10} isLoggedIn={false} /> */}
      {/* optional props use ? on the children to pass optional props */}
      <Greet name="bangladesh"  isLoggedIn={false} />
      <Person name={PersonName} />
      <PersonList names = {nameList} />
      <Status status="loading"/>
      <Heading>PlaceHolder Text</Heading>
      {/*//! Passing react components as props" */}
      <Oscar>
        <Heading>Oscar goes to Hamim!</Heading>
      </Oscar>
    </div>
  );
};

export default App;
