import React, { Component, Fragment } from 'react'
import pt from 'prop-types'

// const Student = (props) => {
// 	return (
// 		<h1>
// 			Hello {props.name}. {props.children}
// 		</h1>
// 	)
// }

// class Student extends Component {
// 	state = {
// 		name: "Neelam",
// 		rollno: 105
// 	}
// 	render() {
// 	return (
// 		<Fragment>
// 			<h1>Name from props: {this.props.name}</h1>
// 			<h1>Name from state: {this.state.name}</h1>
// 			<h1>Props children property: {this.props.children}</h1>
// 			<h1>Roll No. from props: {this.props.rollno}</h1>
// 			<h1>Roll No. from state: {this.state.rollno}</h1>
// 		</Fragment>
// 	)	
// 	}
// }


// setting state using constructor
class Student extends Component {
	constructor(props){
		super(props)
		this.state = {
			name: "Neelam",
			rollno: 105
		}
	}
	render(){
	return (
		<Fragment>
			<h1>Name from props: {this.props.name}</h1>
			<h1>Name from state: {this.state.name}</h1>
			<h1>Props children property: {this.props.children}</h1>
			<h1>Roll No. from props: {this.props.rollno}</h1>
			<h1>Roll No. from state: {this.state.rollno}</h1>
		</Fragment>
	)	
	}
}

export default Student
