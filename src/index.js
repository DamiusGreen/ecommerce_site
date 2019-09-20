import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./app.css";
import Main_Navbar from "./Nav1.js";
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
              <nav style={{ margin: 0 }}>
              <div class="dealbar">
                
                  <Navbar color="light" light expand="md" >
                    <div class="col-md-8">
                        <h1>Today's 50% OFF Deals</h1>
                    </div>
                    <div class="col-md-4">
                        <Link to='/Option1' >
                            Buisness
                        </Link>

                        <Link to='/Option2' >
                            Casual
                        </Link>

                        <Link to='/Option3' >
                            Loungewear
                        </Link>
                    </div>
                  </Navbar>
                
              </div>
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

ReactDOM.render(
    <div>
        <Main_Navbar />
        <App />
    </div>, 
    document.getElementById('root')
);