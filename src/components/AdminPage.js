import React from 'react';

const AdminPage = (props, { authUser }) => {
  return (
    <div>
      <h1>Admin</h1>
      <p>Restricted area! Only users with the admin rule are authorized.</p>
    </div>
  );
};

export default AdminPage