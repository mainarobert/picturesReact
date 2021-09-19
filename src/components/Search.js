import React, { Component } from 'react'

class Search extends Component {

    onInputChange (e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className= "ui segment">
                <form className= "ui form">
                    <div className= "field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange} //onChange: user changes text in an input
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search