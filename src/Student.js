import React, { Component, Fragment } from 'react'

class Student extends Component {
	state = {
		id: 1,
		name: 'John',
	}
	handleClick = (id) => {
		this.setState({
			name: 'Neelam',
		})
		console.log(id)
	}
	handleClickArg = () => this.handleClick(this.state.id)
	render() {
		return (
			<Fragment>
				<h1>Hello {this.state.name}</h1>
				<h1>Id: {this.state.id}</h1>
				<button onClick={this.handleClickArg}>Click Me</button>
				<a href='https://github.com/diwakarsharma95' onClick={this.handleClick}>
					Click Me
				</a>
			</Fragment>
		)
	}
}

export default Student
