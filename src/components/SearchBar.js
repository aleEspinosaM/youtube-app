import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state={videos: ''};
        this.onInputChange = this.onInputChange.bind(this);
        
    }
    
    onInputChange(e) {
        this.setState({videos: e.target.value});
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search Videos" 
                    onChange={this.onInputChange}
                    value={this.state.videos}
                    />
                value of the input {this.state.videos}
            </div>
        );
    }
}

export default SearchBar;