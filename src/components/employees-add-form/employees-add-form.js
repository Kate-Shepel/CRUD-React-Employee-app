import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const name = document.querySelector(".form-control[name='name']");
        const salary = document.querySelector(".form-control[name='salary']");

        if (this.state.name.length >= 3 && this.state.salary > 0) {
            name.style.backgroundColor = 'white';
            salary.style.backgroundColor = 'white';
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: ''
            })
        } else {
            if (this.state.name.length < 3) {
                name.style.backgroundColor = 'red';
            } else {
                name.style.backgroundColor = 'white';
            }

            if (this.state.salary <= 0) {
                salary.style.backgroundColor = 'red';
            } else {
                salary.style.backgroundColor = 'white';
            }
        }
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onFormSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;