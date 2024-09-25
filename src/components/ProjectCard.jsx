import React from "react";
import Card from 'react-bootstrap/Card';
import mediaplayer from '../assets/mediaplayer.jpg';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";




function ProjectCard() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
      
      <Card style={{ width: '100%' }} onClick={handleShow}>
      <Card.Img variant="top" src={mediaplayer} />
      <Card.Body>
        <Card.Title>Mediaplayer</Card.Title>
      </Card.Body>
        </Card>
        

        <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                        <img src={mediaplayer} width='100%' alt="" />
                    </Col>
                    <Col md={6}>
                        <h4>Description</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quo expedita illum, beatae omnis numquam at nesciunt error qui exercitationem?</p>
                        <h4>Technologies</h4>
                        <p>Languages : React , Javascript ,Html, css</p>
                    </Col>
                </Row>
            </Modal.Body>
       
            <div className="mt-3 d-flex ms-3 mb-4">
                <Link to={'/git'} className="ms-5 me-3 fs-4" style={{textDecoration :'none'}}>
                    <FontAwesomeIcon icon={faGithub}/>                    
                </Link>
                <Link to={'/git'} className="ms-5 me-3 fs-4" style={{textDecoration :'none'}}>
                    <FontAwesomeIcon icon={faLink} />                    
                </Link>
            </div>
      </Modal>
  </>;
}

export default ProjectCard;
