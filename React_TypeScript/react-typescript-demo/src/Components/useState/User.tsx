import React, { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
    // ? useState Future Value provides us way to set the useState type explicity like what we have done here.
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
        name : "Shakil",
        email : "shakil@gmail.com"
    })
  };
  const handleLogout = () => {
    setUser(null)
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User Name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;
