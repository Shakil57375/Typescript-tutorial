import { PersonProps } from "./PersonTypes"
const Person = ({name} : PersonProps) => {
  return (
    <div>{name.first} {name.last}</div> 
  )
}

export default Person