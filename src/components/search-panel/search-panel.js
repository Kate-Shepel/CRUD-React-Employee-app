import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: ''
        }
    }

    onUpdateSearch = (e) => {
        const searchWord = e.target.value;
        this.setState({searchWord: searchWord});
        this.props.onUpdateSearch(searchWord)
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.searchWord}
                onChange={this.onUpdateSearch}/>
            )
    }
}

export default SearchPanel;