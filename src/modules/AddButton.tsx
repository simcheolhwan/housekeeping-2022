import { FC, useState } from "react"
import { Button, Modal } from "antd"
import { PlusOutlined } from "@ant-design/icons"

interface Props {
  title?: string
  submit: () => Promise<void>
}

const AddButton: FC<Props> = ({ title, submit, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const set = async () => {
    await submit()
    close()
  }

  return (
    <>
      <Button onClick={open} block>
        <PlusOutlined />
      </Button>

      <Modal title={title} visible={isOpen} onOk={set} onCancel={close}>
        {children}
      </Modal>
    </>
  )
}

export default AddButton
