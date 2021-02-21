import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
<<<<<<< HEAD
      <h2 className="display-4 pb-3 text-center" style={{fontSize:'3em'}}>{heading}</h2>
      <p className="lead text-center pb-3" style={{fontsize: '1.25em'}}>
=======
      <h2 className="display-4 pb-3 text-center" style={{fontSize:"2.8em"}}>{heading}</h2>
      <p className="lead text-center pb-3">
>>>>>>> 14840a79cd41480974eca2f4a50ed9f1ba8ec554
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  );
};

export default GetInTouch;
