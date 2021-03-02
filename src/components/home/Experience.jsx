import React from 'react';
import ExperienceCard from "./ExperienceCard";
import Card from "react-bootstrap/Card";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (
        <Jumbotron fluid className="bg-white m-0">
            <Container fluid className="p-4" style={{width:'60%'}}>
                <hr/>
                <h2 className="display-4 p-3 text-center" style={{fontSize:'3em'}}>Work Experience</h2>
                <hr/>
                <div class="row">
                    <div class="col-xl-12">
                        {
                        experiences.data.map(data => {
                            return <ExperienceCard key={data.role.location} data={data} />
                        })
                        }
                    </div>
                </div>
        </Container>
        </Jumbotron>
    );
}
 
export default Experience;






// return (  
//     <section className="section">
//         <Container>
//             <Jumbotron fluid className="bg-white">
//                 <h2 className="display-4 mb-5 text-center">
//                     {experiences.heading}
//                 </h2>
//                 <Row>
//                     {
//                         experiences.data.map(data => {
//                             return <ExperienceCard key={data.company} data={data} />
//                         })
//                     }
//                 </Row>
//             </Jumbotron>
//         </Container>
//     </section>
// );