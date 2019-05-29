import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }

  stupidtoggle = () => {
    console.log("Hit function");
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    const { toggle } = this.state;
    return (
      <header>
        <div>
          <div className="logo">Start Bootstrap</div>
          <button onClick={this.stupidtoggle}>Menu</button>
          <nav className={toggle ? "show" : ""}>
            <ul>
              <li>
                <a href="#services"> SERVICES </a>
              </li>
              <li>
                <a href="#services"> PORTFOLIO </a>
              </li>
              <li>
                <a href="#services"> ABOUT </a>
              </li>
              <li>
                <a href="#services"> TEAM </a>
              </li>
              <li>
                <a href="#services"> CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
