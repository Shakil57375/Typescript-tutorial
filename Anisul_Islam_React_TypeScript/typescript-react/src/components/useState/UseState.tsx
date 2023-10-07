import React, { useState } from 'react'
type userType ={
    id : number,
    name : string,
    isPlaying : boolean
}
const UseState = () => {
    // const [user, setUser] = useState<null | userType>(null)
    //! to avoid the optional chaining (?) you can use it.
    const [user, setUser] = useState<userType>({} as userType)
    const handleIncrease = () =>{
        setUser({id : 3, name : "tamim", isPlaying : false})
    }
  return (
    <div className='user'>
        {/* <p>{user?.name}</p> */}
        <p style={{textAlign : "center"}}>{user.name}</p>
        <button onClick={handleIncrease}>Add User</button>
    </div>
  )
}

export default UseState