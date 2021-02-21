import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Pdf from "../../editable-stuff/resume.pdf";

import axios from "axios";
// import { Jumbotron } from "react-bootstrap";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message1, message2, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{padding:"5% 13%"}}>
    {/* <Jumbotron fluid id="aboutme" className="m-0"> */}
      {/* <Container fluid>  */}
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize + 20}
              />
            )}
          </div>

          {/* <div className={`col-lg-${showPic ? "20" : "20"}`}> */}
          <div className="col-lg-7">
            <h2 className="display-4 mb-5 text-center" >{heading}</h2>
            <p className="lead text-center">{message1}</p>
            <p className="lead text-center">{message2} </p>
            <hr/>
              <div className="container">
                <div className="row">
                  <p>Testing info</p>
                </div>
              </div>
            <hr/>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
              
            )}
          </div>
          
        </div>
      {/* </Container> */}
      {/* </Jumbotron> */}
      </div>
    </div>
  );
};

export default AboutMe;
