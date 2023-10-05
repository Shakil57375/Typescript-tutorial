import "./App.css";
import { Button } from "./Components/Button";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import { Input } from "./Components/Input";
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
      {/* //? union of string literals */}
      <Status status="loading"/>
      {/* //* children Props */}
      <Heading>PlaceHolder Text</Heading>
      {/*//! Passing react components as props" */}
      <Oscar>
        <Heading>Oscar goes to Hamim!</Heading>
      </Oscar>
      <Button
      handleClick={(event, id)=>{
        console.log("Button clicked", event, id);
      }}
      ></Button>
      <Input value=""  handleChange={(event) => console.log(event)}></Input>
    </div>
  );
};

export default App;
