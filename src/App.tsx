import { useInitDatabase } from "data/database"
import Dashboard from "pages/Dashboard"

const App = () => {
  const hydrated = useInitDatabase()
  if (!hydrated) return null
  return <Dashboard />
}

export default App
