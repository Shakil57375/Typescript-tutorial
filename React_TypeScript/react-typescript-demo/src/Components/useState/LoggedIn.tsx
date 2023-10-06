import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <div style={{display : "flex", flexDirection : "column"}}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
      </div>
      <div>user is {isLoggedIn ? "LoggedIn" : "LogOut"}</div>
    </div>
  );
};

export default LoggedIn;
