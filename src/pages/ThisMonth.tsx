import { Space } from "antd"
import { useAnnualData } from "data/read"
import ThisMonthTable from "./ThisMonthTable"
import DetailedTable from "./DetailedTable"

const ThisMonth = () => {
  const { income, expense, earn, spend } = useAnnualData()

  return (
    <Space align="start" wrap>
      <ThisMonthTable title="고정 수입" data={income} dataKey="income" />
      <DetailedTable title="수입" data={earn} dataKey="earn" />
      <ThisMonthTable title="고정비" data={expense} dataKey="expense" />
      <DetailedTable title="소비" data={spend} dataKey="spend" />
    </Space>
  )
}

export default ThisMonth
