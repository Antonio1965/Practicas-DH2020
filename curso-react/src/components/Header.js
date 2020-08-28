import React from 'react';
import logo from '../logo.svg';

function Header(props){
    console.log(props)
    const myEmail = props.email || "sabu"
    const tuEmail = email => {
        console.log(email)
        return email + "@gmail.com"
    }

    return (
        <header className="App-header">
            {props.email ?
                <img src={logo} className="App-logo" alt="logo" />
                :
                <span>no hay email</span>
            }
            <p>
                {tuEmail(myEmail)}
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
                {props.message}
            </a>
      </header>
    )
}

export default Header