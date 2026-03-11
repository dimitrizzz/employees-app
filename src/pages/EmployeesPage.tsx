import {useEffect, useMemo} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import employeesData from "../data/employees.json"
import type {RootState} from "../store/store"
import type {Employee} from "../types/employee"
import {
    setEmployees,
    setSearch,
    setDepartment
} from "../store/employeeSlice"

import SearchFilter from "../components/SearchFilter"
import EmployeeGrid from "../components/EmployeeGrid"
import EmployeeDetails from "../components/EmployeeDetails"

const STORAGE_SEARCH = "employeeSearch"
const STORAGE_DEPARTMENT = "employeeDepartment"

const EmployeesPage = () => {

    const dispatch = useDispatch()
    const {id} = useParams()

    const {employees, search, department} = useSelector(
        (state: RootState) => state.employees
    )

    useEffect(() => {
        dispatch(setEmployees(employeesData as Employee[]))

        const savedSearch = localStorage.getItem(STORAGE_SEARCH)
        const savedDepartment = localStorage.getItem(STORAGE_DEPARTMENT)

        if (savedSearch) {
            dispatch(setSearch(savedSearch))
        }

        if (savedDepartment) {
            dispatch(setDepartment(savedDepartment))
        }

    }, [dispatch])

    const departments = useMemo(() => {
        const unique = [...new Set(employees.map((e) => e.department))]
        return ["All", ...unique]
    }, [employees])

    const filteredEmployees = useMemo(() => {

        return employees.filter((emp) => {

            const matchesSearch =
                emp.fullName.toLowerCase().includes(search.toLowerCase()) ||
                emp.email.toLowerCase().includes(search.toLowerCase())

            const matchesDepartment =
                department === "All" || emp.department === department

            return matchesSearch && matchesDepartment

        })

    }, [employees, search, department])

    const selectedEmployee = useMemo(() => {

        if (!id) return null

        return employees.find((emp) => emp.id === Number(id)) || null

    }, [employees, id])

    return (
        <div>

            <h1>Employees</h1>

            <SearchFilter
                search={search}
                onSearchChange={(value) => {
                    dispatch(setSearch(value))
                    localStorage.setItem(STORAGE_SEARCH, value)
                }}
                department={department}
                onDepartmentChange={(value) => {
                    dispatch(setDepartment(value))
                    localStorage.setItem(STORAGE_DEPARTMENT, value)
                }}
                departments={departments}
            />

            <EmployeeGrid employees={filteredEmployees}/>

            <EmployeeDetails employee={selectedEmployee}/>

        </div>
    )
}

export default EmployeesPage