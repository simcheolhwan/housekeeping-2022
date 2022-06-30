import { useState } from "react"
import { Space, Table, Typography } from "antd"
import { equals, sum } from "ramda"
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

  const dataSource = showAll
    ? data
    : data.filter(({ month }) => month === thisMonth + 1)

  const total = sum(dataSource.map(({ amount }) => amount))

  return (
    <Space direction="vertical">
      <Table
        title={() => (
          <span onClick={toggle}>
            {title} {total.toLocaleString()}
          </span>
        )}
        columns={[
          { dataIndex: "month" },
          { dataIndex: "category" },
          { dataIndex: "content" },
          {
            dataIndex: "amount",
            align: "right",
            render: (n: number, record) => {
              const index = data.findIndex((item) => equals(item, record))

              const edit = () =>
                promptNumber(n, (value) =>
                  setDetailedItem(dataKey, index, { ...record, amount: value })
                )

              return <Text onClick={edit}>{n.toLocaleString()}</Text>
            },
          },
        ]}
        dataSource={dataSource}
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
