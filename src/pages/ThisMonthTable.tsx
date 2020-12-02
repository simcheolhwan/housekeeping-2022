import { Button, Dropdown, Menu, Space, Table, Typography } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { toPairs } from "ramda"
import { thisMonth } from "data/read"
import { setAnnualData } from "data/write"
import { useBalanceError } from "data/calc"

const { Text } = Typography

interface Props {
  title: string
  data: { [title: string]: number[] }
  dataKey: "income" | "expense"
}

const ThisMonthTable = ({ title, data, dataKey }: Props) => {
  const balanceError = useBalanceError()

  const dataSource = toPairs(data)
    .map(([title, numbers]) => ({ title, amount: numbers[thisMonth] }))
    .sort(({ amount: a }, { amount: b }) => b - a)

  return (
    <Space direction="vertical">
      <Table
        title={() => title}
        columns={[
          { dataIndex: "title" },
          {
            dataIndex: "amount",
            align: "right",
            render: (n: number, { title }) => {
              const menu = (
                <Menu>
                  <Menu.Item
                    onClick={async () => {
                      const input = window.prompt()
                      const value = Number(input)
                      if (!input || !Number.isInteger(value)) return
                      await setAnnualData(dataKey, title, value)
                    }}
                    key="0"
                  >
                    편집
                  </Menu.Item>

                  <Menu.Divider />

                  {!!balanceError && (
                    <Menu.Item
                      onClick={async () => {
                        const value = {
                          income: n + balanceError,
                          expense: n - balanceError,
                        }[dataKey]
                        await setAnnualData(dataKey, title, value)
                      }}
                      key="1"
                    >
                      {(balanceError > 0 && dataKey === "income") ||
                      (balanceError < 0 && dataKey === "expense")
                        ? "+"
                        : "-"}
                      {Math.abs(balanceError).toLocaleString()}
                    </Menu.Item>
                  )}
                </Menu>
              )

              return (
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Text>{n.toLocaleString()}</Text>
                </Dropdown>
              )
            },
          },
        ]}
        dataSource={dataSource}
        rowKey={({ title }) => title}
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

export default ThisMonthTable
