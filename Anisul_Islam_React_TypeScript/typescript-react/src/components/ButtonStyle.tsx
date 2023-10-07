// import React from 'react'
import React , {CSSProperties} from 'react'
type ButtonStyleProps ={
    // style : React.CSSProperties
    style : CSSProperties
}
const ButtonStyle = ({style} : ButtonStyleProps) => {
  return (
    <div style={style} >ButtonStyle</div>
  )
}

export default ButtonStyle