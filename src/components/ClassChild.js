import React, {Component} from 'react'

class ClassChild extends Component {
    render(){
        return <div>
            <h1>This is the child class component</h1>
            <h3>{this.props.num}</h3>
            <button onClick={this.props.add}>Add</button>
            <button onClick={this.props.sub}>Subtract</button>
        </div>
    }
}

export default ClassChild;