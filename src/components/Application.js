import React, { Component } from 'react';

import { firestore } from '../firebase';

import Posts from './Posts';
import { collectIdsAndDocs } from '../util';

class Application extends Component {
  state = {
    posts: []
  };

  unsubscribe = null;

  componentDidMount = async () => {
    // .onSnapshot returns a function that is passed to unsubscribe
    //
    this.unsubscribe = firestore.collection('posts').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
