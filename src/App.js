import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Navbar from './components/Navbar'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    const {isDarkTheme} = this.state
    this.setState({isDarkTheme: !isDarkTheme})
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <div className={isDarkTheme ? 'darkcolor' : ''}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
