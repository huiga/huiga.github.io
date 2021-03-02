import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import SkillsCard from "./SkillsCard";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, skillNames }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container fluid className="p-4" style={{width:'75%'}}>
        <hr/>
        <h2 ref={skillsTabRef} className="display-4 pb-3 text-center" style={{fontSize:'3em'}}>
          {heading}
        </h2>
        <hr/>
        <SkillsTab skills={skillNames} isScrolled={isScrolled}/> 
      </Container>
    </Jumbotron>
  );
}

export default Skills;
