import React, { Component } from 'react';
import {render} from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from '../src/components/SearchBar';
import VideoList from '../src/components/VideoList';

const API_KEY = 'AIzaSyA_ksP_KTe4MDewom375PiukXxh2S9Nt-I';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: []
        }
        YTSearch({key: API_KEY, term: 'react.js'}, (videos) => {
            this.setState({videos});
        })
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;



render(<App />, document.querySelector('.container'))
