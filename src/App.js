import React, { Component } from 'react'
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Footer from './components/Footer';
import News from './views/News';
import IG from './views/IG';
import SignUp from './views/SignUp';
import CreatePost from './views/CreatePost';
import IndividualPost from './views/IndividualPost';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      name: 'Sia',
      age: 22,
      message: {}
    }
    console.log('construction is done')
  }
  logMeIn = (user) => {
    this.setState({
      user: user
    })
  };
  logMeOut = () => {
    this.setState({
      user: {}
    })
  };
  addMessage = (msg, category) => {
    this.setState({message: {message: msg, category: category}})
  };
  componentDidMount = () => {
    console.log('first rendering is completed (MOUNTED!)')
  }
  methodNumber3 = () => {
    return 'do something'
  }
  happyBirthday = () => {
    console.log('button is clicked')
    this.setState({ age: this.state.age + 1 })
  }
  render() {
    console.log('rendering is about to happen')

    return (

      <Router>
        <div>
          <Nav />

          <Routes>
            <Route path='/' element={<Home age={this.state.age} x={this.happyBirthday} />} />
            <Route path='/login' element={<Login logMeIn={this.logMeIn} addMessage={this.addMessage}/>}/>
            <Route path='/signup'element={<SignUp addMessage={this.addMessage}/>}/>
            <Route path='/feed' element={<IG />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/posts/create' element={<CreatePost user={this.state.user}/>}/>
            <Route path= '/posts/:postId' element= {<IndividualPost />}/>


          </Routes>

          <Footer />
        </div>
      </Router>
    )
  }
}