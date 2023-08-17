import React from 'react';

const AccountCard = ({ onSignInClick }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p>Your Account</p>
      <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2" onClick={onSignInClick}>
        Sign In
      </button>
    </div>
  );
};

export default AccountCard;
