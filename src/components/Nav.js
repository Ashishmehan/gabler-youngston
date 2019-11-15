import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/gy_logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Nav = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="">
          <nav className="navbar is-transparent destop_menu"
            role="navigation" 
            aria-label="main-navigation" 
          >
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item" title="Logo">
                  <img src={logo} alt="Gabler Youngston" />
                </Link>
              </div>
              <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
                <div className="navbar-end has-text-centered">
                    <Link activeClassName="is-active" className="navbar-item" to="/about">
                      ABOUT
                    </Link>
                    <Link activeClassName="is-active" className="navbar-item" to="/work">
                      WORK
                    </Link>
                    <Link activeClassName="is-active" className="navbar-item" to="/news">
                      NEWS
                    </Link>
                    <Link activeClassName="is-active" className="navbar-item" to="/contact">
                      CONTACT
                    </Link>
                </div>
              </div>
            </div>
          </nav>
          <nav
            className="navbar is-transparent mobile_menu"
            role="navigation"
            aria-label="main-navigation" 
          >
             <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" title="Logo">
                      <img src={logo} alt="Gabler Youngston" />
                    </Link>
                  </div>
                  <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                  <label for="openSidebarMenu" class="sidebarIconToggle">
                    <div class="spinner diagonal part-1"></div>
                    <div class="spinner horizontal"></div>
                    <div class="spinner diagonal part-2"></div>
                  </label>
                  <div id="sidebarMenu">
                    <div className=" sidebarMenuInner">
                        <Link activeClassName="is-active" className="navbar-item" to="/about">
                          ABOUT
                        </Link>
                        <Link activeClassName="is-active" className="navbar-item" to="/work">
                          WORK
                        </Link>
                        <Link activeClassName="is-active" className="navbar-item" to="/news">
                          NEWS
                        </Link>
                        <Link activeClassName="is-active" className="navbar-item" to="/contact">
                          CONTACT
                        </Link>
                    </div>
                  </div>
              </div>
          </nav>
      </div>
    )
  }
}

export default Nav
