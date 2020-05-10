import React, { Component, Fragment } from 'react'




class Student extends Component{
	state = {
		name: "John"
	}
	// handleClick = (e) => {
	// 	this.setState((state,props) => {
	// 		console.log(state)
	// 		console.log(props)
	// 		state.name = "Neelam"
	// 	})
	// }
	handleClick = (e) => {
		this.setState({
			name: "Neelam"
		})
	}
	render(){
		return(
			<Fragment>				
				<h1>Hello {this.state.name}</h1>
				 <button onClick={this.handleClick}>Click Me</button>
				 <a href="https://github.com/diwakarsharma95" onClick={this.handleClick}>Click Me</a>
			 </Fragment>
		)
	}
}

export default Student