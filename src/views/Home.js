import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Sia',
            age: 22
        }
    }
    happyBirthday = () => {
        console.log('button is clicked')
        this.setState({age: this.state.age + 1})
      }


  render() {
    return (
    <div>
        {this.props.age}
    <img src ='https://media0.giphy.com/media/g1n3pswjr0ouc/giphy.gif' /> 
    <h3>My name is {this.state['name']}, I am {this.state['age']} years old</h3>
    <button onClick={()=>{this.props.x()}} >Add to age +</button>
    </div>
    )
  }
}
