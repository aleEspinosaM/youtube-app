import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state={term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        
    }
    
    onInputChange(e) {
        this.setState({term: e.target.value});
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search Videos" 
                    onChange={this.onInputChange}
                    value={this.state.term}
                    />
                value of the input {this.state.term}
            </div>
        );
    }
}

export default SearchBar;