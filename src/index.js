import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
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

ReactDOM.render(<App />, document.getElementById('root'));