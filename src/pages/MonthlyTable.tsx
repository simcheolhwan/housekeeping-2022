import { PageHeader, Table } from "antd"
import { fromPairs, toPairs } from "ramda"

const MonthlyTable = ({ data }: { data: { [title: string]: number[] } }) => {
  const dataSource = Array.from({ length: 12 }, (_, i) => ({
    ...fromPairs(toPairs(data).map(([label, list]) => [label, list[i]])),
    month: i + 1,
  }))

  return (
    <PageHeader>
      <Table
        columns={[
          {
            dataIndex: "month",
            render: (value) => value + "월",
            align: "center",
          },
          ...Object.keys(data).map((label) => {
            return {
              dataIndex: label,
              title: label,
              render: (value: number) => value > 0 && value.toLocaleString(),
              align: "center" as const,
            }
          }),
        ]}
        dataSource={dataSource}
        rowKey={({ month }) => month}
        pagination={false}
        bordered
      />
    </PageHeader>
  )
}

export default MonthlyTable
