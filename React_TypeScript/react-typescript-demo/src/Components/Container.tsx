import React from "react";

type propsContainer = {
    styles : React.CSSProperties
}
// destructuring props values
// !old one
// export const Container = (props : propsContainer) => {
// * new and recommended one
export const Container = ({styles} : propsContainer) => {
  return (
    <div style={styles}>
      Text content goes here
    </div>
  );
};
