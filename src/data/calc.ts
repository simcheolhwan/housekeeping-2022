import { Dictionary, fromPairs, sum, toPairs, values } from "ramda"
import { useIncome, useEarn, useExpense, useSpend } from "./read"
import { useBank, useReceivable, useCustody } from "./read"

const useTotalBank = () => {
  const bank = useBank()
  return calcTotal(bank)
}

const useTotalReceivable = () => {
  const receivable = useReceivable()
  return calcTotal(receivable)
}

const useTotalCustody = () => {
  const custody = useCustody()
  return calcTotal(custody)
}

const useTotalIncome = () => {
  const income = useIncome()
  return calcTotal(dictTotal(income))
}

const useTotalEarn = () => {
  const earn = useEarn()
  return sum(earn.map(({ amount }) => amount))
}

const useTotalExpense = () => {
  const expense = useExpense()
  return calcTotal(dictTotal(expense))
}

const useTotalSpend = () => {
  const spend = useSpend()
  return sum(spend.map(({ amount }) => amount))
}

export const useTotalBalance = () => {
  const totalIncome = useTotalIncome()
  const totalEarn = useTotalEarn()
  const totalSpend = useTotalSpend()
  const totalExpense = useTotalExpense()
  return [totalIncome + totalEarn, totalSpend + totalExpense]
}

export const useBalanceError = () => {
  const totalBank = useTotalBank()
  const totalReceivable = useTotalReceivable()
  const totalCustody = useTotalCustody()
  const [profit, loss] = useTotalBalance()
  return totalBank + totalReceivable - totalCustody - (profit - loss)
}

/* utils */
const dictTotal = (data: Dictionary<number[]>) => {
  return fromPairs(toPairs(data).map(([key, numbers]) => [key, sum(numbers)]))
}

const calcTotal = (data: Dictionary<number>) => {
  return sum(values(data))
}
