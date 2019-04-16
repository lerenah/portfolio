import React, { Component } from "react"
import { Link } from "gatsby"
import headshot from "../../images/headshot.jpg"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
      {
        id: 3,
        path: "/projects",
        text: "projects",
      },
    ],
  }
  navbarHandler = () => {
    console.log("hello")
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand" />
        <img src={headshot} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        />
        <span className="navbar-toggler-icon" />
      </nav>
    )
  }
}
