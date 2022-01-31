import { Alert } from "antd"

const ErrorFallback = ({ error }: { error: Error }) => {
  return <Alert message={error.message} type="error" />
}

export default ErrorFallback
