import React, { useEffect, useState } from "react";

const useFetch = url => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (error) setError(false);
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        if (data) setData(false);
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};

function CustomerProfile({ customerId }) {
  const { data, loading, error } = useFetch(
    `https://cyf-react.glitch.me/customers/${customerId}`
  );

  if (loading) {
    return "Loading...";
  } else if (error) {
    return "ERROOOOOR";
  } else if (data) {
    return (
      <ul>
        <li>{`Customer Profile: ${data.id}`}</li>
        <li>{`Email: ${data.email}`}</li>
        <li>{`Vip: ${data.vip}`}</li>
        <li>{`Phone Number: ${data.phoneNumber}`}</li>
      </ul>
    );
  } else {
    return null;
  }
}

export default CustomerProfile;
