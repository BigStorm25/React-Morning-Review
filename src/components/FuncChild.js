import React from 'react'

const FuncChild = (props) => {
    return <div>
        <h1>This is the child functional component</h1>
        <p>Hi! My name is {props.name} and I love the color {props.color}</p>
    </div>
}

export default FuncChild;