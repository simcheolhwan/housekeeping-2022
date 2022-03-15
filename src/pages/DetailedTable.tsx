import { Space, Table, Typography } from "antd"
import { setDetailedItem } from "data/write"
import { promptNumber } from "./helpers"
import AddDetailedItem from "./AddDetailedItem"

const { Text } = Typography

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
            render: (n: number, record, index) => {
              const edit = () =>
                promptNumber(n, (value) =>
                  setDetailedItem(dataKey, index, { ...record, amount: value })
                )

              return <Text onClick={edit}>{n.toLocaleString()}</Text>
            },
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
