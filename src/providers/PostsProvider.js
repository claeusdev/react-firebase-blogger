// Keeps all posts in state
// Posts Provider can give to component with asks for it
import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../util';

// Context api allows to skip passing state/props from parent to child component
// High level component is wrapped in it provider and any children can tap into its state
// Only components that need it can tap into its state
export const PostsContext = createContext();

class PostsProvider extends Component {
  state = { posts: [] };
  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromFirestore();
  }

  render() {
    const { posts } = this.state;
    const { children } = this.props;
    // PostCOntext has two props Provider and consumer
    return (
      <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
    );
  }
}

export default PostsProvider;
