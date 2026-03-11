type SearchFilterProps = {
    search: string;
    onSearchChange: (value: string) => void;
    department: string;
    onDepartmentChange: (value: string) => void;
    departments: string[];
};

const SearchFilter = ({
                          search,
                          onSearchChange,
                          department,
                          onDepartmentChange,
                          departments,
                      }: SearchFilterProps) => {
    return (
        <div className="search-filter">
            <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
            />

            <select
                value={department}
                onChange={(e) => onDepartmentChange(e.target.value)}
            >
                {departments.map((dep) => (
                    <option key={dep} value={dep}>
                        {dep}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchFilter;
