import React, { useState } from 'react'

const NewUser = () => {
    const [userName, setUserName] = useState("")
    const handleUserName = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setUserName(event?.target.value)
    }
  return (
    <div className='user'>
        <p>Create new user</p>
        <input type="text" onChange={handleUserName} />
        <p style={{textAlign : "center"}}>{userName}</p>
    </div>

  )
}

export default NewUser