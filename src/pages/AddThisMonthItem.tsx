import { Form, Input } from "antd"
import { addAnnualItem } from "data/write"
import AddButton from "modules/AddButton"

const AddThisMonthItem = ({ dataKey }: { dataKey: "income" | "expense" }) => {
  const [form] = Form.useForm<{ name: string }>()

  const submit = async () => {
    const { name } = await form.validateFields()
    await addAnnualItem(dataKey, name)
  }

  return (
    <AddButton submit={submit}>
      <Form form={form} layout="vertical">
        <Form.Item name="name" label="이름">
          <Input autoFocus />
        </Form.Item>
      </Form>
    </AddButton>
  )
}

export default AddThisMonthItem
