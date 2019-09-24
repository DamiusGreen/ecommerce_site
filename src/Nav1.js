import React from 'react';

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

            <Nav className="ml-auto " navbar >
              <NavItem>
                <NavLink href="/" style={{ textDecoration: 'none' },{color: "black"}}>Home</NavLink>
              </NavItem>
              <DropdownItem divider />
              <NavItem>
                
                <UncontrolledDropdown >
                  <DropdownToggle nav style={{ textDecoration: 'none' },{color: "black"}}>
                    Dinnerware
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem className="dropdown-link">
                          <a href="" >Dinnerware Sets</a>
                      </DropdownItem >
                    <DropdownItem divider />
                      <DropdownItem className="dropdown-link">
                          <a href="" >Dinner Plates</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem className="dropdown-link">
                          <a href="" >Bowls</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem className="dropdown-link">
                          <a href="" >Mugs</a>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              
              
              </NavItem>
              <DropdownItem divider />

              <NavItem >
                <UncontrolledDropdown >
                  <DropdownToggle nav class="topnav" style={{ textDecoration: 'none' },{color: "black"}}>
                    Kitchen Appliances
                  </DropdownToggle>
                  <DropdownMenu right >
                      <DropdownItem className="dropdown-link">
                          <a href="" >Slow Cookers</a>
                      </DropdownItem >
                    <DropdownItem divider />
                      <DropdownItem className="dropdown-link">
                          <a href="" >Microwaves</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem className="dropdown-link">
                          <a href="" >Blenders</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem className="dropdown-link">
                          <a href="" >Toasters & Toaster Ovens</a>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>

              <DropdownItem divider />

              <UncontrolledDropdown  >
                <DropdownToggle nav style={{ textDecoration: 'none' },{color: "black"}}>
                  Pots & Pans
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="dropdown-link">
                      <a href="" >Cookware Sets</a>
                  </DropdownItem >
                <DropdownItem divider />
                  <DropdownItem className="dropdown-link">
                      <a href="" >Roasting Pans</a>
                  </DropdownItem>
                <DropdownItem divider />
                  <DropdownItem className="dropdown-link">
                      <a href="" >Woks</a>
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