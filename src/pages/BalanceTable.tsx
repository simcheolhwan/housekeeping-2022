import { Space, Table, Typography } from "antd"
import { toPairs } from "ramda"
import { setBalance, setBalanceName } from "data/write"
import { promptNumber } from "./helpers"
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
          {
            dataIndex: "name",
            render: (name) => (
              <Text
                onClick={async () => {
                  const input = window.prompt()
                  if (!input) return
                  await setBalanceName(balanceKey, name, input)
                }}
              >
                {name}
              </Text>
            ),
          },
          {
            dataIndex: "balance",
            align: "right",
            render: (n: number, { name }) => {
              const edit = () =>
                promptNumber(n, (value) => setBalance(balanceKey, name, value))

              return <Text onClick={edit}>{n.toLocaleString()}</Text>
            },
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
