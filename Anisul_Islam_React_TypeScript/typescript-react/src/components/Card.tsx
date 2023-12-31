import { CardProps } from "./CardType"
const Card = ({children} : CardProps) => {
  return (
    <div className="card">
        {children}
    </div>
  )
}

export default Card