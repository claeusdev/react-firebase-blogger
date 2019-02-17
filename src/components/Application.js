import React, { Component } from 'react';
import Posts from './Posts';
import Authentication from './Authentication';

import { Switch, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import PostShow from './PostShow';
class Application extends Component {
  render() {
    return (
      <main className="Application">
        <Link to="/">
          <h1>Think Piece</h1>
        </Link>
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/posts/:id" component={PostShow} />
        </Switch>
      </main>
    );
  }
}

export default Application;
