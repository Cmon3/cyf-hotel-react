import React from "react";

const dataFooter = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function FooterComp(props) {
  return (
    <ul className="footer">
      {dataFooter.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default FooterComp;
