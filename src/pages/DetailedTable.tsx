import { useState } from "react"
import { Space, Table, Typography } from "antd"
import { setDetailedItem } from "data/write"
import { thisMonth } from "data/read"
import { promptNumber } from "./helpers"
import AddDetailedItem from "./AddDetailedItem"

const { Text } = Typography

interface Props {
  title: string
  data: DetailedItem[]
  dataKey: "earn" | "spend"
}

const DetailedTable = ({ title, data, dataKey }: Props) => {
  const [showAll, setShowAll] = useState(false)
  const toggle = () => setShowAll(!showAll)

  return (
    <Space direction="vertical">
      <Table
        title={() => <span onClick={toggle}>{title}</span>}
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
        dataSource={
          showAll ? data : data.filter(({ month }) => month === thisMonth + 1)
        }
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
