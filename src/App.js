import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/Home';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/library'>Library</Link>
      </div>
         <h1>Bloc Jams</h1>
       </header>
       <main>
       <Route exact path="/" component={Landing} />
       <Route path="/library" component={Library} />
       <Route path="/album/:slug" component={Album} />
       </main>
      </div>
    );
  }
}

export default App;
