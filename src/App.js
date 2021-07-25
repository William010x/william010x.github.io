import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render () {
    return (
      <div className="App">
          <Router>
            <NavBar/>
            <Container className="App-page">
              {/* <Home/> */}
              {/* <About/> */}
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                {/* <Route path="/contact" component={Contact}/> */}
                <Route component={NoMatch}/>
              </Switch>
            </Container>
          </Router>
      </div>
    );
  }
}

export default App;
