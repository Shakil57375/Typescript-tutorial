type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
};
// datatype : string, number, boolean, void, null
// basic version
// export const User = (props : UserProps) => {
// Recommended version
export const User = ({ name, age, isRegistered }: UserProps) => {
  return (
    <div>
      {/* basic version */}
      {/* <p>{props.name}</p>
        <p>{props.age}</p> */}
      {/* Recommended version */}
      <p>{name}</p>
      <p>{age}</p>
      {
        isRegistered ? <p>Registered user</p> : <p>Not Register user</p>
      }
    </div>
  );
};
