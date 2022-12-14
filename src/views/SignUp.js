import React, { Component } from 'react'

export default class SignUp extends Component {

    sendSignUpInfo = async (e) => {
        e.preventDefault();

        const username = e.target.username.value
        const First_Name = e.target.First_Name.value
        const Last_Name = e.target.Last_Name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const password2 = e.target.password2.value

        if (password !== password2) {
            console.log('password dont match')
            return
        }

        const res = await fetch('http://127.0.0.1:5000/API/signup', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                First_Name: First_Name,
                Last_Name: Last_Name,
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": 'application/json'
            }
        });
        const data = await res.json();
        console.log(data.status)
        if (data.status === 'ok') {

            this.props.addMessage(data.message, 'success')

        }
        console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={(e) => { this.sendSignUpInfo(e) }}>
                    <input placeholder='Username' name='username' className='form-control' type='text' />
                    <input placeholder='First name' name='First_Name' className='form-control' type='text' />
                    <input placeholder='Last name' name='Last_Name' className='form-control' type='text' />
                    <input placeholder='Email' name='email' className='form-control' type='email' />
                    <input placeholder='Password' name='password' className='form-control' type='password' />
                    <input placeholder='Confirm Password' name='password2' className='form-control' type='password' />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        )
    }
}