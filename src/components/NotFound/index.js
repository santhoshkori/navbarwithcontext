// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="homecontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt=" not found"
            className="notfoundimg"
          />
          <h1 className={isDarkTheme ? 'white' : ''}>Lost Your Way?</h1>
          <p className={isDarkTheme ? 'white' : ''}>
            We cannot seem to find the page your lookin for
          </p>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
