type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
  language: string[];
  person: {
    firstName: string;
    lastName: string;
    age: number;
    isEmployed: boolean;
    language: string[];
  };
};
// ? datatype : string, number, boolean, void, null
// ? user defined types => object, array, enum, union any, custom type
// basic version
// export const User = (props : UserProps) => {
// Recommended version
export const User = ({ name, age, isRegistered, language, person }: UserProps) => {
  return (
    <div>
      {/* basic version */}
      {/* <p>{props.name}</p>
        <p>{props.age}</p> */}
      {/* Recommended version */}
      <p>{name}</p>
      <p>{age}</p>
      {isRegistered ? <p>Registered user</p> : <p>Not Register user</p>}
      <p>Speaks:</p>
      {language.map((lang, index) => {
        return <span key={index}>{lang}</span>;
      })}
      {/* another person data by using object */}
      
    </div>
  );
};
