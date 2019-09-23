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


    export default function App() {
        return (
            <Router>
                <div>
                <nav style={{ margin: 0 }}>
                <div class="dealbar">
                  
                    <Navbar color="light" light expand="md" >
                    <div class="row">
                      <div class="col-md-9">
                          <h1 style={{fontSize: 33}}>Today's 50% OFF Deals</h1>
                      </div>
                      <div class="col-md-3" style={{paddingRight: 30}, {marginRight: 10}}>
                          <Link to='/Option1' style={{ textDecoration: 'none' },{color: "black"}}>
                              Buisness
                          </Link>
  
                          <Link to='/Option2' style={{ textDecoration: 'none' },{color: "black"}}>
                              Casual
                          </Link>
  
                          <Link to='/Option3' style={{ textDecoration: 'none' },{color: "black"}}>
                              Loungewear
                          </Link>
                      </div>
                    </div>
                    </Navbar>
                  
                </div>
  
                <hr  class="line" />
                
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
  
  const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 5
          }}
      />
  );
  

ReactDOM.render(
    <div>
        <Main_Navbar />
        <App />
    </div>, 
    document.getElementById('root')
);