import { Alert } from "antd"
import { useTotalBalance } from "data/calc"

const Summary = () => {
  const [profit, loss] = useTotalBalance()

  const text = [
    `${profit.toLocaleString()} - ${loss.toLocaleString()}`,
    (profit - loss).toLocaleString(),
  ].join(" = ")

  return <Alert message={text} type="info" />
}

export default Summary
