import React from "react";

function CustomerProfile({ customerId }) {
  const getCustomerId = id => {
    console.log(id);
  };
  return (
    <div>
      <p>`Customer Profile ${customerId}`</p>
    </div>
  );
}

export default CustomerProfile;
