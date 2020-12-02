import { useDatabase } from "./database"

/* balance */
export const useBalance = () => {
  const { balance } = useDatabase()
  return balance
}

export const useBank = () => {
  const { bank } = useBalance()
  return bank
}

export const useReceivable = () => {
  const { receivable } = useBalance()
  return receivable
}

export const useCustody = () => {
  const { custody } = useBalance()
  return custody
}

/* annual */
const date = new Date()
export const thisYear = date.getFullYear()
export const thisMonth = date.getMonth()

export const useAnnualData = () => {
  const { annual } = useDatabase()
  return annual[String(thisYear)]
}

export const useIncome = () => {
  const { income } = useAnnualData()
  return income
}

export const useEarn = () => {
  const { earn } = useAnnualData()
  return earn
}

export const useExpense = () => {
  const { expense } = useAnnualData()
  return expense
}

export const useSpend = () => {
  const { spend } = useAnnualData()
  return spend
}
