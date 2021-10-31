import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component'

import Home from './pages/Home';
import Info from './pages/Info';

import './App.css';


class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Sidebar />
          <div className="content">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/info' component={Info} />
          </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;