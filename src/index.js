import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./app.css"
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
              <nav style={{ margin: 10 }}>
              <Navbar color="light" light expand="md" >
                    <Link to='/Option1' >
                        Option 1
                    </Link>

                    <Link to='/Option2' >
                        Option 2
                    </Link>

                    <Link to='/Option3' >
                        Option 3
                    </Link>
              </Navbar>
                </nav>
                  <Route path='/Option1' exact component={Option1} />
                  <Route path='/Option2' component={Option2} />
                  <Route path='/Option3' component={Option3} />
              </div>
          </Router>
      )
  }
  

function Option1() {
    return (
        <div>
            <h1>Option 1 Content</h1>
        </div>
    )
}

function Option2() {
    return (
        <div>
            <h1>Option 2 Content</h1>
        </div>
    )
}

function Option3() {
  return (
      <div>
          <h1>Option 3 Content</h1>
      </div>
  )
}



class Main_Navbar extends React.Component {
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
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <DropdownItem divider />
              <NavItem>
                <NavLink href="/Men#/">Men</NavLink>
              </NavItem>
              <DropdownItem divider />
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
                  </DropdownItem >
                  <DropdownItem divider />
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

ReactDOM.render(
    <div>
        <Main_Navbar />
        <App />
    </div>, 
    document.getElementById('root')
);