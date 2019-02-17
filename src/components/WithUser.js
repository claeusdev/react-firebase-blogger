import React from 'react';
import { UserContext } from '../providers/UserProvider';

// Show actual name of component in React devtools

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
// Higher Order Component, returns WrappedComponent
const WithUser = (Component) => {
  const WrappedComponent = (props) => {
    return (
      // Return whatever props thats passed in and also the user
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };

  WrappedComponent.displayName = `WithUser(${getDisplayName(
    WrappedComponent
  )})`;
  return WrappedComponent;
};

export default WithUser;
