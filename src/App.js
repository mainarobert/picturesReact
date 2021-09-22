import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Search from './components/Search';
import ImageList from './components/ImageList';

class App extends Component {

  state = { images: [] }

  onSearchSubmit= async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID IM1N2QbYCLiZz6VF-nGrDt1kxxLK6-aL-a1GR6ejZww' 
      }
    })

    //console.log(response.data.results)

    this.setState( {images: response.data.results} )

  }

  render() {
      return (
      <div className= "ui container" style= {{marginTop: '50px'}}>
        <Search onSubmit= {this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images= {this.state.images}/>
      </div>
    )
  }
}

export default App
