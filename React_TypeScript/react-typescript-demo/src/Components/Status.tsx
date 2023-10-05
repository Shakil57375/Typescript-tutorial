type statusType = {
    status : "loading" | "success" | "error"
}
const Status = (props : statusType) => {
    let message
    if(props.status === "loading"){
        message = "Loading..."
    }
    else if(props.status === "success"){
        message = "data fetched successfully"
    }
    else{
        message = "Error fetching data"
    }
  return (
    <div>Status - {message}</div>
  )
}

export default Status