import React from 'react';
import ReactDOM from 'react-dom';
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
        <Navbar color="light" light expand="md" class="w-100" >
          <NavbarBrand href="/" style={{fontSize: 18}}>We provide a wide variety of luxury brands.</NavbarBrand>
          <NavbarToggler onClick={this.navToggle} style={{border:"none"}}/>
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <DropdownItem divider />
              <NavItem>
                
                <UncontrolledDropdown >
                  <DropdownToggle nav>
                    Men
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem>
                          <a href="">New Arrivals</a>
                      </DropdownItem >
                    <DropdownItem divider />
                      <DropdownItem>
                          <a href="">Suits</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem>
                          <a href="">Denim Wear</a>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              
              
              </NavItem>
              <DropdownItem divider />

              <NavItem>
                <UncontrolledDropdown >
                  <DropdownToggle nav>
                    Women
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem>
                          <a href="">New Arrivals</a>
                      </DropdownItem >
                    <DropdownItem divider />
                      <DropdownItem>
                          <a href="">Suits</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem>
                          <a href="">Dresses</a>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>

              <DropdownItem divider />

              <UncontrolledDropdown  >
                <DropdownToggle nav>
                  Kids
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <a href="">Boys</a>
                  </DropdownItem >
                  <DropdownItem divider />
                  <DropdownItem>
                      <a href="">Girls</a>
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