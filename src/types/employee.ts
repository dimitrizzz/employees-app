export interface Employee {
    id: number;
    fullName: string;
    department: string;
    email: string;
    status: "Active" | "Inactive";
    hireDate: string;
    notes: string;
}