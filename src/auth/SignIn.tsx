import { Form, Input, Button, PageHeader } from "antd"

const SignIn = ({ onSubmit }: { onSubmit: (password: string) => void }) => {
  return (
    <PageHeader>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={({ password }) => onSubmit(password)}
      >
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password autoFocus />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </PageHeader>
  )
}

export default SignIn
