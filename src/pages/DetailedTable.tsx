import { Space, Table } from "antd"
import AddDetailedItem from "./AddDetailedItem"

interface Props {
  title: string
  data: DetailedItem[]
  dataKey: "earn" | "spend"
}

const DetailedTable = ({ title, data, dataKey }: Props) => {
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

      <AddDetailedItem dataKey={dataKey} />
    </Space>
  )
}

export default DetailedTable
