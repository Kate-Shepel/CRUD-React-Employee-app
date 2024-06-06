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
        {name: "John Smith", salary: 800, increase: false, rise: true, id: 1},
        {name: "Klara Burton", salary: 3000, increase: true, rise: false, id: 2},
        {name: "Semuel Pablo", salary: 15000, increase: false, rise: false, id: 3}
      ],
      searchWord: '',
      filter: 'all'
    }
    this.maxId = 4;
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

  addItem = (name, salary) => {
    const newItem = {
      name, 
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
  }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
          data: newArr
      }
    });
  }

  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(elem => elem.id === id);
    //   const oldItem = data[index];
    //   const newItem = {...oldItem, increase: !oldItem.increase};
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //   return {
    //       data: newArr
    //   }
    // });

    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }));
  }

  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })
    }));
  }

  searchEmp = (items, searchWord) => {
    if (searchWord.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(searchWord) > -1
    })
  }

  onUpdateSearch = (searchWord) => {
    this.setState({searchWord: searchWord})
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items; 
    }
  }

  render() {
    const {data, searchWord, filter} = this.state;
    const employeeCount = this.state.data.length;
    const onIncreaseCount = this.state.data.filter(elem => elem.increase === true).length;
    const searchData = this.filterPost(this.searchEmp(data, searchWord), filter);

    return (
      <div className="app">
          <AppInfo
            employeeCount={employeeCount}
            onIncreaseCount={onIncreaseCount} />

          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter}/>
          </div>

          <EmployeesList
            onDelete={this.deleteItem}
            data={searchData}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
          />
          <EmployeesAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
