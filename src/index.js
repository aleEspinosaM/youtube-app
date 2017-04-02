import React, { Component } from 'react';
import {render} from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from '../src/components/SearchBar';
import VideoList from '../src/components/VideoList';
import VideoDetail from '../src/components/VideoDetail';

const API_KEY = 'AIzaSyA_ksP_KTe4MDewom375PiukXxh2S9Nt-I';

class App extends Component {
    constructor(props) {
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.videoSearch = this.videoSearch.bind(this);
        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('react.js')

    }
    
    onVideoSelect(selectedVideo){
        this.setState({selectedVideo})
    }

     videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({videos,selectedVideo: videos[0]});
        })
     }

    render() {

        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
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
