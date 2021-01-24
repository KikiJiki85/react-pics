import React from 'react';
import axios from 'axios';

import SearchBar from './search-bar';


export default class App extends React.Component {

    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID kDs3fwifZzcsoiazfk707fxop-i20nx-5QtIxtMTsQA',
            }
        });

        console.log(response.date.results);
    };


    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}