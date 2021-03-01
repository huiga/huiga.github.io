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
        <Jumbotron fluid className="bg-white m-0 p-0">
            <Card className="card shadow-sm p-3 m-0 bg-white rounded">
            <Container fluid className="p-4" style={{width:'60%'}}>
                <h2 className="display-4 pb-5 text-center">Work Experience</h2>
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
        </Card>
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