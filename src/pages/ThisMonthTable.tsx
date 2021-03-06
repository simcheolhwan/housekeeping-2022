import { Dropdown, Menu, Space, Table, Typography } from "antd"
import { toPairs } from "ramda"
import { thisMonth } from "data/read"
import { setAnnualItem } from "data/write"
import { useBalanceError } from "data/calc"
import { promptNumber } from "./helpers"
import AddThisMonthItem from "./AddThisMonthItem"

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
              const edit = () =>
                promptNumber(n, (value) => setAnnualItem(dataKey, title, value))

              const auto = async () => {
                const value = {
                  income: n + balanceError,
                  expense: n - balanceError,
                }[dataKey]
                await setAnnualItem(dataKey, title, value)
              }

              const menu = (
                <Menu>
                  <Menu.Item onClick={edit} key="0">
                    편집
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Item onClick={auto} key="1">
                    {(balanceError > 0 && dataKey === "income") ||
                    (balanceError < 0 && dataKey === "expense")
                      ? "+"
                      : "-"}
                    {Math.abs(balanceError).toLocaleString()}
                  </Menu.Item>
                </Menu>
              )

              return balanceError ? (
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Text>{n.toLocaleString()}</Text>
                </Dropdown>
              ) : (
                <Text onClick={edit}>{n.toLocaleString()}</Text>
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

      <AddThisMonthItem dataKey={dataKey} />
    </Space>
  )
}

export default ThisMonthTable
