import React, { useContext } from 'react';

import moment from 'moment';
import { auth } from '../firebase';
import { UserContext } from '../providers/UserProvider';
import { Link } from 'react-router-dom';
const CurrentUser = () => {
  const user = useContext(UserContext);
  const { displayName, photoURL, email, createdAt, children } = user;
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="/profile">
            <h2>{displayName}</h2>
          </Link>

          <p className="email">{email}</p>
          <p className="created-at">
            {moment(
              user.createdAt.toDate && user.createdAt.toDate()
            ).calendar()}
          </p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </section>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Bill Murray',
  email: 'billmurray@mailinator.com',
  photoURL: 'https://www.fillmurray.com/300/300',
  createdAt: new Date()
};

export default CurrentUser;
