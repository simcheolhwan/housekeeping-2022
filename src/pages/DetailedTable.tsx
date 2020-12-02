import { Button, Space, Table } from "antd"
import { PlusOutlined } from "@ant-design/icons"

interface Props {
  title: string
  data: DetailedItem[]
  dataKey: "earn" | "spend"
}

const DetailedTable = ({ title, data }: Props) => {
  return (
    <Space direction="vertical">
      <Table
        title={() => title}
        columns={[
          { dataIndex: "month" },
          { dataIndex: "category" },
          { dataIndex: "content" },
          {
            dataIndex: "amount",
            align: "right",
            render: (n: number) => n.toLocaleString(),
          },
        ]}
        dataSource={data}
        rowKey={(item) => JSON.stringify(item)}
        pagination={false}
        showHeader={false}
        bordered
      />

      <Button block>
        <PlusOutlined />
      </Button>
    </Space>
  )
}

export default DetailedTable
