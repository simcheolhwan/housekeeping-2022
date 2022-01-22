interface Database {
  balance: Balance
  annual: { [year: string]: Year }
}

interface Balance {
  bank: BalanceData
  receivable: BalanceData
  custody: BalanceData
}

type BalanceKey = keyof Balance

interface BalanceData {
  [name: string]: number
}

interface Year {
  income: { [title: string]: number[] }
  expense: { [title: string]: number[] }
  earn: DetailedItem[]
  spend: DetailedItem[]
}

interface DetailedItem {
  month: number
  amount: number
  category?: string
  content: string
}
