import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
        <nav class= 'sidenav' className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="feed">IG</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}