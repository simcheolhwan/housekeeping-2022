import { Button, Space, Table, Typography } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { toPairs } from "ramda"
import { setBalance } from "data/write"

const { Text } = Typography

interface Props {
  title: string
  data: BalanceData
  balanceKey: keyof Balance
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

      <Button block>
        <PlusOutlined />
      </Button>
    </Space>
  )
}

export default BalanceTable
