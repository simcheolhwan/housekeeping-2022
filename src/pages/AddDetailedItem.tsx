import { Form, Input } from "antd"
import { thisMonth } from "data/read"
import { addDetailedItem } from "data/write"
import AddButton from "modules/AddButton"

const initialValues = { month: thisMonth + 1 }
const AddDetailedItem = ({ dataKey }: { dataKey: "earn" | "spend" }) => {
  const [form] = Form.useForm<DetailedItem>()

  const submit = async () => {
    const { month, amount, ...rest } = await form.validateFields()
    const item = { month: Number(month), amount: Number(amount), ...rest }
    await addDetailedItem(dataKey, item)
    form.resetFields()
  }

  return (
    <AddButton submit={submit}>
      <Form form={form} initialValues={initialValues} layout="vertical">
        <Form.Item name="month" label="월" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>

        <Form.Item name="category" label="분류">
          <Input />
        </Form.Item>

        <Form.Item name="content" label="내용" rules={[{ required: true }]}>
          <Input autoFocus />
        </Form.Item>

        <Form.Item name="amount" label="금액" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </AddButton>
  )
}

export default AddDetailedItem
