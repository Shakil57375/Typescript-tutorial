type UserProps = {
  name: string;
  age: number;
  isRegistered: boolean;
  language: string[];
  user: {
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
export const User = ({
  name,
  age,
  isRegistered,
  language,
  user,
}: UserProps) => {
  return (
    <div style={{display : "flex", justifyContent : "space-around"}}>
      <div>
        {/* basic version */}
        {/* <p>{props.name}</p>
        <p>{props.age}</p> */}
        {/* Recommended version */}
        <p>{name}</p>
        <p>{age}</p>
        {isRegistered ? <p>Registered user</p> : <p>Not Register user</p>}
        <span>Speaks:</span>
        {language.map((lang, index) => {
          return <span key={index}>{lang}</span>;
        })}
      </div>
      <div>
        {/* another user data by using object */}
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{user.age}</p>
        <p>
          {user.language.map((lang, index) => {
            return <span key={index}>{lang}</span>;
          })}
        </p>
      </div>
    </div>
  );
};
