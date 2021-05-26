import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Reference from './components/pages/Reference';
import Youtube from './components/pages/Youtube';
import Script from './components/pages/Script';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <Route path="/" exact component={Main}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/Reference" exact component={Reference}></Route>
            <Route path="/Youtube" exact component={Youtube}></Route>
            <Route path="/Script" exact component={Script}></Route>
            <Route path="/Portfolio" exact component={Portfolio}></Route>
            <Route path="/Contact" exact component={Contact}></Route>
        </Router>
    )
}

export default App;