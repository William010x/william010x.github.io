import React from 'react';
import './css/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Jobs from './Jobs';
import Projects from './Projects';

class App extends React.Component {
  render () {
    return (
      <div className="App">
          <Router>
            <NavBar/>
            <div className="App-page">
              <Home/>
              <AboutMe/>
              <Skills/>
              <Jobs/>
              <Projects/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
