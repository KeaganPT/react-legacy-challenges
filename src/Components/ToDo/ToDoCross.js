import React from 'react'

export default (props) => (
    <div 
        style={{textDecoration: props.chore.complete ? 'line-through' : ""}} 
        onClick={props.toggleComplete}
    >
        {props.chore.text}
    </div>

)