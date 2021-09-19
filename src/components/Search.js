import React, { Component } from 'react'

class Search extends Component {

    state = {term: ''}

    render() {
        return (
            <div className= "ui segment">
                <form className= "ui form">
                    <div className= "field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value= {this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} //onChange: user changes text in an input
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search