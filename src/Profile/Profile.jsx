import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-sm mx-auto mt-20 space-y-8 text-center">
      <h2>this is profile page!</h2>
      Email: {user && user.email}
    </div>
  );
};

export default Profile;
