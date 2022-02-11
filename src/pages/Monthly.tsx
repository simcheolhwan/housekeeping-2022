import { PageHeader, Space } from "antd"
import { useAnnualData } from "data/read"
import MonthlyTable from "./MonthlyTable"

const Monthly = () => {
  const { income, expense } = useAnnualData()

  return (
    <PageHeader>
      <Space>
        <MonthlyTable data={income} />
        <MonthlyTable data={expense} />
      </Space>
    </PageHeader>
  )
}

export default Monthly
