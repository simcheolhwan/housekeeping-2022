import { ref, set } from "firebase/database"
import { db } from "config/firebase"
import { thisMonth, thisYear } from "./read"

export const setBalance = async (
  key: keyof Balance,
  name: string,
  value: number
) => await set(ref(db, `/balance/${key}/${name}`), value)

export const setAnnualData = async (
  key: "income" | "expense",
  title: string,
  value: number
) =>
  await set(ref(db, `/annual/${thisYear}/${key}/${title}/${thisMonth}`), value)
