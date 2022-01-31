import { ErrorBoundary } from "react-error-boundary"
import { PageHeader, Space } from "antd"
import ErrorFallback from "./ErrorFallback"
import Balance from "./Balance"
import ThisMonth from "./ThisMonth"

const Dashboard = () => {
  return (
    <PageHeader>
      <Space direction="vertical" size="large">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Balance />
        </ErrorBoundary>

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThisMonth />
        </ErrorBoundary>
      </Space>
    </PageHeader>
  )
}

export default Dashboard
