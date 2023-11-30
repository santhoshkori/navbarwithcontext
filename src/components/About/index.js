// Write your code here
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const liteaboutimg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const darkaboutimg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="homecontainer">
          <img src={isDarkTheme ? darkaboutimg : liteaboutimg} alt="about" />
          <h1 className={isDarkTheme ? 'white' : ''}>About</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
