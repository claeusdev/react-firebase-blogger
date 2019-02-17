import React, { Component } from 'react';
import UserProvider from './UserProvider';
import PostsProvider from './PostsProvider';

export default class AppProvider extends Component {
  render() {
    return (
      <div>
        <UserProvider />
        <PostsProvider />
      </div>
    );
  }
}
