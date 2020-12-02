import { useEffect } from "react"
import { atom, useRecoilState, useRecoilValue } from "recoil"
import { onValue, ref } from "firebase/database"
import { db } from "config/firebase"

const databaseState = atom<Database | undefined>({
  key: "database",
  default: undefined,
})

export const useInitDatabase = () => {
  const [database, setDatabase] = useRecoilState(databaseState)

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const contents = snapshot.val()
      setDatabase(contents)
    })
  }, [setDatabase])

  const hydrated = !!database
  return hydrated
}

export const useDatabase = () => {
  const database = useRecoilValue(databaseState)
  if (!database) throw new Error("Database is not loaded")
  return database
}
