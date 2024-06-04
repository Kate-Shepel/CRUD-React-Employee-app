import "./app-info.css";

const AppInfo = ({employeeCount, onIncreaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeeCount}</h2>
            <h2>Премию получат: {onIncreaseCount}</h2>
        </div>
    )
}

export default AppInfo;