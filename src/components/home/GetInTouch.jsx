import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center" style={{fontSize:"2.8em"}}>{heading}</h2>
      <p className="lead text-center pb-3">
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
