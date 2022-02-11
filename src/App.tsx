import { Route, Routes } from "react-router-dom"
import { useInitDatabase } from "data/database"
import Dashboard from "pages/Dashboard"
import Monthly from "pages/Monthly"

const App = () => {
  const hydrated = useInitDatabase()

  if (!hydrated) return null

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/monthly" element={<Monthly />} />
    </Routes>
  )
}

export default App
