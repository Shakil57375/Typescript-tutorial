// ? importing oscar type from different file you can export and import type like components.
import { OscarProps } from "./OscarTypes"
const Oscar = (props : OscarProps) => {
  return (
    // ! Passing react components as props"
    <div>{props.children}</div>
  )
}

export default Oscar