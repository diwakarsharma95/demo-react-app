import React, { Component, Fragment } from 'react'


//Using Class
// class Student extends Component{
// 	handleClick = () => {
// 		console.log("Button Clicked",this)
// 	}
// 	render(){
// 		return(
// 			<Fragment>
// 				<h1>Hello Event</h1>
// 				<button onClick={this.handleClick}>Click Me</button>
// 			</Fragment>
// 		)
// 	}
// }

//Using function
const handleClick = (e) => {
	e.preventDefault(e)
	console.log("Clicked")
}

const Student = () => {
	return(
		<Fragment>				
			<h1>Hello Event</h1>
 			<button onClick={handleClick}>Click Me</button>
			 <a href="https://github.com/diwakarsharma95" onClick={handleClick}>Click Me</a>
 		</Fragment>
	)
}

export default Student