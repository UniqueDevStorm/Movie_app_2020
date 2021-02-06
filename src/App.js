import React from "react";
import Home from "./routers/Home";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routers/About";
import Navigation from "./components/Navigation";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
        </HashRouter>
    )
}

export default App;