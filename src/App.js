import React from "react";
import Home from "./routers/Home";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routers/About";

function App() {
    return (
        <HashRouter>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
        </HashRouter>
    )
}

export default App;