import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import More from './pages/More';
class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Nav>
            <NavItem>
              <NavLink to="/" tag={Link}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={Link}>About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/more" tag={Link}>Learn More</NavLink>
            </NavItem>
          </Nav>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/more" component={More} />
      </div>
      </Router>
    );
  }
}
export default App;