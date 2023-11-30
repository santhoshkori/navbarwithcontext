import ThemeContext from '../../context/ThemeContext'
import './index.css'

const litehomeimg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const Darkhomeimg = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="homecontainer">
          <img src={isDarkTheme ? Darkhomeimg : litehomeimg} alt="home" />
          <h1 className={isDarkTheme ? 'white' : ''}>Home</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
