import { Space, Table, Typography } from "antd"
import { toPairs } from "ramda"
import { setBalance } from "data/write"
import AddBalanceItem from "./AddBalanceItem"

const { Text } = Typography

interface Props {
  title: string
  data: BalanceData
  balanceKey: BalanceKey
}

const BalanceTable = ({ title, data, balanceKey }: Props) => {
  const dataSource = toPairs(data)
    .map(([name, balance]) => ({ name, balance }))
    .sort(({ balance: a }, { balance: b }) => b - a)

  return (
    <Space direction="vertical">
      <Table
        title={() => title}
        columns={[
          { dataIndex: "name" },
          {
            dataIndex: "balance",
            align: "right",
            render: (n: number, { name }) => (
              <Text
                onClick={async () => {
                  const input = window.prompt()
                  const value = Number(input)
                  if (!input || !Number.isInteger(value)) return
                  await setBalance(balanceKey, name, value)
                }}
              >
                {n.toLocaleString()}
              </Text>
            ),
          },
        ]}
        dataSource={dataSource}
        rowKey={({ name }) => name}
        pagination={false}
        showHeader={false}
        bordered
      />

      <AddBalanceItem balanceKey={balanceKey} />
    </Space>
  )
}

export default BalanceTable
