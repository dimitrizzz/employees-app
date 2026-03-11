import { useNavigate } from "react-router-dom"
import type { Employee } from "../types/employee"

type EmployeeDetailsProps = {
    employee: Employee | null;
};

const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
    const navigate = useNavigate()

    if (!employee) return null

    return (
        <div className="modal-backdrop" onClick={() => navigate("/")}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Employee Details</h2>

                <p><strong>Full Name:</strong> {employee.fullName}</p>
                <p><strong>Email:</strong> {employee.email}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Status:</strong> {employee.status}</p>
                <p><strong>Hire Date:</strong> {employee.hireDate}</p>
                <p><strong>Notes:</strong> {employee.notes}</p>

                <button onClick={() => navigate("/")}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default EmployeeDetails