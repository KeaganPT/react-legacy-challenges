import React, {Component} from "react";
import ToDoForm from './ToDoForm'
import ToDoCross from './ToDoCross'

export default class ToDoIndex extends Component {

    state = {
        chores: []
    }

    addChore = (chore) => {
        this.setState({
            chores: [chore, ...this.state.chores]
        })
    }

    toggleComplete = (choreText) => {
        this.setState({
            chores: this.state.chores.map(chore => {
                if(chore.text === choreText) {
                    return {
                        ...chore,
                        complete: !chore.complete    
                    }
                } else {
                    return chore
                }
            })
        })
    }

    render() {
        return (
            <div>
                <ToDoForm onSubmit={this.addChore}/>
                {/* {JSON.stringify(this.state.chores)} */}
                {this.state.chores.map((chore, index) => {
                    return(
                        <div key={index}>
                            <ToDoCross toggleComplete={() => this.toggleComplete(chore.text)} chore={chore} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

