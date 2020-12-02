import { Space } from "antd"
import { useBalance } from "data/read"
import BalanceError from "./BalanceError"
import BalanceTable from "./BalanceTable"

const Balance = () => {
  const { bank, receivable, custody } = useBalance()

  return (
    <Space direction="vertical" size="small">
      <BalanceError />

      <Space align="start" wrap>
        <BalanceTable title="은행" data={bank} balanceKey="bank" />
        <BalanceTable title="미수" data={receivable} balanceKey="receivable" />
        <BalanceTable title="예치" data={custody} balanceKey="custody" />
      </Space>
    </Space>
  )
}

export default Balance
