import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import "@testing-library/jest-dom/vitest"
import SearchFilter from "../components/SearchFilter.tsx"

describe("SearchFilter", () => {
    it("renders search input", () => {
        render(
            <SearchFilter
                search=""
                onSearchChange={() => {}}
                department="All"
                onDepartmentChange={() => {}}
                departments={["All", "IT"]}
            />
        )

        const input = screen.getByPlaceholderText("Search by name or email")
        expect(input).toBeInTheDocument()
    })
})