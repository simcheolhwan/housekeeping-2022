import { Alert } from "antd"
import { useTotalBalance } from "data/calc"
import { Link } from "react-router-dom"

const Summary = () => {
  const [profit, loss] = useTotalBalance()

  const text = [
    `${profit.toLocaleString()} - ${loss.toLocaleString()}`,
    (profit - loss).toLocaleString(),
  ].join(" = ")

  return (
    <Alert
      message={text}
      type="info"
      action={<Link to="/monthly">전체</Link>}
    />
  )
}

export default Summary
