import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

function App() {
    return (
        <Router>
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
            </div>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <h1>Home Component</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About Component</h1>
        </div>
    )
}



export default class Main_Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.dropToggle = this.dropToggle.bind(this);
    this.navToggle = this.navToggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      dropdownOpen: false
    };

    this.state = {
      isOpen: false
    };

  }

  //Navbar toggle button when window is smaller functionality
  navToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
 
  //Drop down mousehover functionality
  dropToggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">Ecommerce</NavbarBrand>
          <NavbarToggler onClick={this.navToggle} style={{border:"none"}}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="#/men/">Men</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Women</NavLink>
              </NavItem>
              <UncontrolledDropdown onMouseOver={this.onMouseEnter} 
                                    onMouseLeave={this.onMouseLeave} 
                                    isOpen={this.state.dropdownOpen} 
                                    toggle={this.dropToggle} >
                <DropdownToggle nav>
                  Kids
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Boys
                  </DropdownItem>
                  <DropdownItem>
                    Girls
                  </DropdownItem>
                  
                  </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

ReactDOM.render(<Main_Navbar />, document.getElementById('root'));