import React from "react";
import Home from "./routers/Home";
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routers/About";
import Navigation from "./components/Navigation";
import Detail from "./routers/Detail";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/movie-detail' component={Detail} />
        </HashRouter>
    )
}

export default App;