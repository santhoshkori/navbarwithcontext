import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const websitelitelogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const websitedarklogo =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const liteimg = 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const darkimg = 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const changetheme = () => {
            toggleTheme()
          }
          return (
            <navbar className="navcontainer">
              <img
                className="logoimgsty"
                src={isDarkTheme ? websitedarklogo : websitelitelogo}
                alt="website logo"
              />
              <ul className="ulliststy">
                <Link to="/">
                  <li className={isDarkTheme ? 'white' : ''}>
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="/about">
                  <li className={isDarkTheme ? 'white' : ''}>
                    <p>About</p>
                  </li>
                </Link>
              </ul>
              <button
                className="themebutton"
                type="button"
                onClick={changetheme}
                data-testId="theme"
              >
                <img
                  className="logoimgsty"
                  src={isDarkTheme ? liteimg : darkimg}
                  alt="theme"
                />
              </button>
            </navbar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Navbar
