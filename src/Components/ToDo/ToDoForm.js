import React, {Component} from "react";

export default class ToDoForm extends Component {
    state= {
        text: ""
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.text} 
                    onChange={this.handleChange}
                    placeholder="Add a Chore..."
                />
                <button onClick={this.handleSubmit}>add Chore</button>
            </form>
        )
    }
}

