import React, { Component } from 'react';
import {render} from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from '../src/components/SearchBar';
import VideoList from '../src/components/VideoList';
import VideoDetail from '../src/components/VideoDetail';

const API_KEY = 'AIzaSyA_ksP_KTe4MDewom375PiukXxh2S9Nt-I';

class App extends Component {
    constructor(props) {
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        YTSearch({key: API_KEY, term: 'react.js'}, (videos) => {
            this.setState({videos,selectedVideo: videos[0]});
        })
    }
    
    onVideoSelect(selectedVideo){
        this.setState({selectedVideo})
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;



render(<App />, document.querySelector('.container'))
