import { PageHeader, Space } from "antd"
import Balance from "./Balance"
import ThisMonth from "./ThisMonth"

const Dashboard = () => {
  return (
    <PageHeader>
      <Space direction="vertical" size="large">
        <Balance />
        <ThisMonth />
      </Space>
    </PageHeader>
  )
}

export default Dashboard
