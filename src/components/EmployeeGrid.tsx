import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import type { Employee } from "../types/employee"

type EmployeeGridProps = {
    employees: Employee[];
};

const EmployeeGrid = ({ employees }: EmployeeGridProps) => {

    const navigate = useNavigate()

    return (
        <TableContainer component={Paper}>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell>Full Name</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>

                    {employees.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                No employees found
                            </TableCell>
                        </TableRow>
                    ) : (
                        employees.map((employee) => (
                            <TableRow
                                key={employee.id}
                                hover
                                sx={{ cursor: "pointer" }}
                                onClick={() => navigate(`/employee/${employee.id}`)}
                            >
                                <TableCell>{employee.fullName}</TableCell>
                                <TableCell>{employee.department}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.status}</TableCell>
                            </TableRow>
                        ))
                    )}

                </TableBody>

            </Table>
        </TableContainer>
    )
}

export default EmployeeGrid