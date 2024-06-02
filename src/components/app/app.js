import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John Smith", salary: 800, increase: true, id: 1},
        {name: "Klara Burton", salary: 3000, increase: true, id: 2},
        {name: "Semuel Pablo", salary: 15000, increase: false, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        // data: newArr
        data: data.filter(elem => elem.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
          <AppInfo />

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>

          <EmployeesList onDelete={this.deleteItem} data={this.state.data}/>
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
