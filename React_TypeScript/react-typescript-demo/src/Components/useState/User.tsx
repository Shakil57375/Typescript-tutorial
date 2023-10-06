import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  // ? useState Future Value provides us way to set the useState type explicity like what we have done here.
  // use it if you are use too
  // const [user, setUser] = useState<AuthUser | null>(null); // ! if you use this use optional caning on the value
  // but there is another way to avoid null as initial value you can provide as the empty object is of type auth user.
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Shakil",
      email: "shakil@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User Name is {user.name} </div>
      <div>User email is {user.email} </div>
    </div>
  );
};

export default User;
