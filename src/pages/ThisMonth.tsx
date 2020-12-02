import { Alert, Space } from "antd"
import { useAnnualData } from "data/read"
import { useTotalBalance } from "data/calc"
import ThisMonthTable from "./ThisMonthTable"
import DetailedTable from "./DetailedTable"

const ThisMonth = () => {
  const [profit, loss] = useTotalBalance()
  const { income, expense, earn, spend } = useAnnualData()

  const text = [
    `${profit.toLocaleString()} - ${loss.toLocaleString()}`,
    (profit - loss).toLocaleString(),
  ].join(" = ")

  return (
    <Space direction="vertical" size="small">
      <Alert message={text} type="info" />

      <Space align="start" wrap>
        <ThisMonthTable title="고정 수입" data={income} dataKey="income" />
        <DetailedTable title="수입" data={earn} dataKey="earn" />
        <ThisMonthTable title="고정비" data={expense} dataKey="expense" />
        <DetailedTable title="소비" data={spend} dataKey="spend" />
      </Space>
    </Space>
  )
}

export default ThisMonth
