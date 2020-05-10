import React, { Component } from 'react'
import pt from 'prop-types'

// const Student = (props) => {
// 	return <h1>Hello {props.name}</h1>
// }

class Student extends Component {
	render() {
		return <h1>Hello {this.props.name}</h1>
	}
}

//You will get an error in Console
Student.propTypes = {
	name: pt.string.isRequired,
}
Student.defaultProps = {
	name: 'User',
}
export default Student
