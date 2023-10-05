type OscarProps = {
    children : React.ReactNode
}
const Oscar = (props : OscarProps) => {
  return (
    // ! Passing react components as props"
    <div>{props.children}</div>
  )
}

export default Oscar