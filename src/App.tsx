import { Routes, Route } from "react-router-dom"
import EmployeesPage from "./pages/EmployeesPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<EmployeesPage />} />
            <Route path="/employee/:id" element={<EmployeesPage />} />
        </Routes>
    )
}

export default App