import React, { useState, ChangeEvent,MouseEvent } from "react";

const NewUser = () => {
  const [userName, setUserName] = useState("");
  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event?.target.value);
  };
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(userName)
  };
  return (
    <div className="user">
      <p className="center">On Change event</p>
      <input type="text" onChange={handleUserName} value={userName} />
      <p style={{ textAlign: "center" }}>{userName}</p>
      {/* onClick event */}
      <button onClick={handleButtonClick}>Show Name in Console</button>
    </div>
  );
};

export default NewUser;
