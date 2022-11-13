import React, { Component } from 'react'
import Nav from './Nav';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null, 
      post: [],
      name: 'Sia',
      age: 22
      }
    console.log('consrrustion is done')
  }

  componentDidMount = () => {
    console.log('first rendering is completed (MOUNTED!)')
  }
  methodNumber3 = () => {
    return 'do something'
  }
  happyBirthday = () => {
    console.log('button is clicked')
    this.setState({age: this.state.age + 1})
  }
  render() {
    console.log('rendering is about to happen')

    return (
      <div>
        <Nav/>
          <h1>Wasssuppppp</h1>
          <h3>My name is {this.state['name']}, I am {this.state['age']} years old</h3>
          <button onClick={this.happyBirthday} >Add to age +</button>
      </div>
    )
  }
}
