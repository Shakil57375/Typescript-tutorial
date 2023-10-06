import React from "react";

type propsContainer = {
    styles : React.CSSProperties
}

export const Container = (props : propsContainer) => {
  return (
    <div style={props.styles}>
      Text content goes here
    </div>
  );
};
