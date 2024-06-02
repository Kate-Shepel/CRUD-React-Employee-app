import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({onDelete, data}) => {

    const elements = data.map(item => {

        let {id, ...itemProps} = item;
        // return <EmployeesListItem name={item.name} salary={item.salary} /> //2nd way
        return <EmployeesListItem
        key={id}
        onDelete={() => onDelete(id)}
        {...itemProps} />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;