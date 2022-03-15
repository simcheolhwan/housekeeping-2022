import { isNil, pickBy } from "ramda"
import { get, ref, set } from "firebase/database"
import { db } from "config/firebase"
import { thisMonth, thisYear } from "./read"

export const setBalance = async (
  key: BalanceKey,
  name: string,
  value: number
) => {
  const dataRef = ref(db, `/balance/${key}/${name}`)
  await set(dataRef, value)
}

export const setBalanceName = async (
  key: BalanceKey,
  oldName: string,
  newName: string
) => {
  const dataRef = ref(db, `/balance/${key}`)
  const prev = (await get(dataRef)).val()
  const value = (await get(ref(db, `/balance/${key}/${oldName}`))).val()
  const updates = { ...prev, [oldName]: null, [newName]: value }
  await set(dataRef, updates)
}

export const addAnnualItem = async (
  key: "income" | "expense",
  title: string
) => {
  const dataRef = ref(db, `/annual/${thisYear}/${key}/${title}`)
  const initial = Array.from({ length: 12 }, () => 0)
  await set(dataRef, initial)
}

export const setAnnualItem = async (
  key: "income" | "expense",
  title: string,
  value: number
) => {
  const dataRef = ref(db, `/annual/${thisYear}/${key}/${title}/${thisMonth}`)
  await set(dataRef, value)
}

export const addDetailedItem = async (
  key: "earn" | "spend",
  item: DetailedItem
) => {
  const dataRef = ref(db, `/annual/${thisYear}/${key}`)
  const prev = (await get(dataRef)).val()
  const next = [...prev, pickBy((v) => !isNil(v), item)]
  await set(dataRef, next)
}

export const setDetailedItem = async (
  key: "earn" | "spend",
  index: number,
  item: DetailedItem
) => {
  const dataRef = ref(db, `/annual/${thisYear}/${key}`)
  const prev: DetailedItem[] = (await get(dataRef)).val()
  const next = prev.map((prevItem, i) => (i === index ? item : prevItem))
  await set(dataRef, next)
}
