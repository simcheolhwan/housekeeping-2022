import { Form, Input } from "antd"
import { setBalance } from "data/write"
import AddButton from "modules/AddButton"

const AddBalanceItem = ({ balanceKey }: { balanceKey: BalanceKey }) => {
  const [form] = Form.useForm<{ name: string; value: number }>()

  const submit = async () => {
    const { name, value } = await form.validateFields()
    await setBalance(balanceKey, name, Number(value))
    form.resetFields()
  }

  return (
    <AddButton submit={submit}>
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="이름" rules={[{ required: true }]}>
          <Input autoFocus />
        </Form.Item>

        <Form.Item name="value" label="금액" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </AddButton>
  )
}

export default AddBalanceItem
