import { headingProps } from "./HeadingTypes"
const Heading = (props : headingProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading