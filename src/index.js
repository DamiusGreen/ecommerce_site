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
                <div >
                <nav style={{ margin: 0 }}>
                <div >
                  
                    <Navbar color="light" light expand="md" >
                    <div class="row">
                      <div class="col-md-5">
                          <h1 style={{fontSize: 33}}>Today's 50% OFF Deals</h1>
                      </div>
                      <div class="col-md-7" style={{paddingRight: 30}, {marginRight: 10}}>
                          <Link to='/Option1' style={{ textDecoration: 'none' },{color: "black"}}>
                              Cutlery
                          </Link>
  
                          <Link to='/Option2' style={{ textDecoration: 'none' },{color: "black"}}>
                              Kitchen Tools and Utensil Sets
                          </Link>
  
                          <Link to='/Option3' style={{ textDecoration: 'none' },{color: "black"}}>
                              Spatulas & Turners
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
          <div className= "cut row w-100">

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_1.jpg" alt="cut1" /></a>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_2.jpg" alt="cut2" /></a>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_3.jpg" alt="cut3" /></a>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_4.jpg" alt="cut4" /></a>
            </div>


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

//Jquery effects for the shipping details link
const $ = window.$;
$(document).ready(function() {
    
    $(".details2").hide()
    $(".details").hover(
      function () {
        $('.details2').stop().fadeTo(300, 1.0);
      }, 
      function () {
        $('.details2').stop().fadeOut(300);
      }
    );
});