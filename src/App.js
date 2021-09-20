import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Search from './components/Search';

class App extends Component {

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID IM1N2QbYCLiZz6VF-nGrDt1kxxLK6-aL-a1GR6ejZww' 
      }
    })

    console.log(response.data.results)

    //console.log(term)
  }

  render() {
      return (
      <div className= "ui container" style= {{marginTop: '50px'}}>
        <Search onSubmit= {this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
