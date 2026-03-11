import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Employee } from "../types/employee"

interface EmployeeState {
    employees: Employee[]
    search: string
    department: string
    selectedEmployee: Employee | null
}

const initialState: EmployeeState = {
    employees: [],
    search: "",
    department: "All",
    selectedEmployee: null
}

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {

        setEmployees: (state, action: PayloadAction<Employee[]>) => {
            state.employees = action.payload
        },

        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },

        setDepartment: (state, action: PayloadAction<string>) => {
            state.department = action.payload
        },


    }
})

export const {
    setEmployees,
    setSearch,
    setDepartment,
} = employeeSlice.actions

export default employeeSlice.reducer