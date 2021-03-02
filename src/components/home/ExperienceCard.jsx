import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <ul class="experience-tl">
            <li>
                <h2 className="lead">{data.date}</h2>
                <h3 className="lead">{data.role}</h3>
                <h4 className="lead">{data.location}</h4>
                <p className="lead">{data.description}</p>
            </li>
        </ul>
     );
}
 
export default ExperienceCard;