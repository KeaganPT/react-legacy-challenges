import React, {Component} from 'react'

export default class DogIndex extends Component {
    constructor() {
        super()
        this.state = {
            img: ''
        }
    }

    handleClick(e) {
        e.preventDefault()
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                
                this.setState({
                    img: data.message
                })
                console.log(data)
            })
            .catch(err => err)
    }

    render() {
        return(
            <div>
                <h1>Random Dog</h1>
                <button onClick={(e) => this.handleClick(e)}>Click for random doge</button>
                <br/>
                <br />
                <img src={this.state.img} alt=''></img>
            </div>
        )
    }
}