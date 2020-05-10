import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Student'
import el from './App'

//Render Element
ReactDOM.render(<Student name='Diwakar' rollno={102}>I am Child</Student>, document.getElementById('root'))
