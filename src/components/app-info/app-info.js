import "./app-info.css";

const AppInfo = ({employeeCount, onIncreaseCount}) => {
    return (
        <div className="app-info">
            <h1>Employee Accounting at Company N</h1>
            <h2>Total Number of Employees: {employeeCount}</h2>
            <h2>Bonus Recipients: {onIncreaseCount}</h2>
        </div>
    )
}

export default AppInfo;