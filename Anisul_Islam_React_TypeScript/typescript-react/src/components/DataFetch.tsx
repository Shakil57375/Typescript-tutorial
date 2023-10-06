type DataFetchProps = {
    status : "successful" | "loading" | "error"
}
export const DataFetch = ({status} : DataFetchProps) => {
    if(status === "loading"){
        return <h2>Data is loading...</h2>
    }
    else if(status === "error"){
        return <h2>Error. Data could not fatched </h2>
    }
  return (
    <div>DataFetched Successfully</div>
  )
}
