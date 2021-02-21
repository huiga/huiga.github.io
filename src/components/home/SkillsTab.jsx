import React from "react";
import Row from "react-bootstrap/Row";
import SkillsBar from "./SkillsBar";
import SkillsCard from "./SkillsCard";

function SkillsSection({ skills, isScrolled }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsCard
          key={`${skill}-${index}`}
          skill={skill.name}
          // value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <SkillsSection
          skills={skills}
          isScrolled={isScrolled}
      />
    </div>
      /* <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
          isScrolled={isScrolled}
        />
      </Col> */
  );
}

export default SkillsTab;
 