import React, { Component } from 'react'
import pt from 'prop-types'

// const Student = (props) => {
// 	return (
// 		<h1>
// 			Hello {props.name}. {props.children}
// 		</h1>
// 	)
// }

class Student extends Component {
	render() {
	return <h1>Hello {this.props.name}, {this.props.children}</h1>
	}
}

export default Student
