import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const SkillsCard = ({skill, isScrolled}) => {
    return (
        // <div style={{ width: '250px', margin:'30px' }}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded" style={{width: '15em', margin: '5px 20px'}}>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title as="h5">{skill || <Skeleton/>} </Card.Title>
                </Card.Body>
            </Card>
        // </div>
    );
}

export default SkillsCard;