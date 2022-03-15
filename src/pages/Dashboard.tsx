import { ErrorBoundary } from "react-error-boundary"
import { PageHeader, Space } from "antd"
import ErrorFallback from "./ErrorFallback"
import Balance from "./Balance"
import ThisMonth from "./ThisMonth"
import Summary from "./Summary"

const Dashboard = () => {
  return (
    <PageHeader>
      <Space direction="vertical">
        <Summary />

        <Space align="start" size="large">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Balance />
          </ErrorBoundary>

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <ThisMonth />
          </ErrorBoundary>
        </Space>
      </Space>
    </PageHeader>
  )
}

export default Dashboard
