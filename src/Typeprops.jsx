import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, age, isMember }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isMember ? 'Member' : 'Guest'}</p>
    </div>
  );
}

// ✅ Define expected prop types
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isMember: PropTypes.bool
};

// ✅ Default props (optional)
UserProfile.defaultProps = {
  age: 18,
  isMember: false
};

export default UserProfile;
