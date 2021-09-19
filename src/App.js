import React, { Component } from 'react'
import './App.css';
import Search from './components/Search';

class App extends Component {

  onSearchSubmit(term) {
    console.log(term)
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
