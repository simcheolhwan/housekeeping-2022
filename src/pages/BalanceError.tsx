import { Alert } from "antd"
import { useBalanceError } from "data/calc"

const BalanceError = () => {
  const balanceError = useBalanceError()
  const excessive = balanceError > 0
  const message = excessive ? "잔고 초과" : "잔고 부족"

  if (!balanceError) return null

  return (
    <Alert
      message={message}
      description={balanceError.toLocaleString()}
      type={excessive ? "success" : "error"}
    />
  )
}

export default BalanceError
