type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
// ! old one accessing values by using dot notation.
/* export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name} You have ${props.messageCount}  todo`
        : "Welcome Guest Please login"}
    </div>
  );
}; */
// * New one and recommended one access value by destructuring
export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      {isLoggedIn
        ? `Welcome ${name} You have ${messageCount}  todo`
        : "Welcome Guest Please login"}
    </div>
  );
};

export default Greet;
