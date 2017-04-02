import React from 'react';
import {render} from 'react-dom';
import SearchBar from '../src/components/SearchBar'

const API_KEY = 'AIzaSyA_ksP_KTe4MDewom375PiukXxh2S9Nt-I';


const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}


render(<App />, document.querySelector('.container'))
