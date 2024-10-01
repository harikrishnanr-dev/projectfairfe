import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from "../services/baseurl";

function EditProject({ project }) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    title: project.title,
    language: project.language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectImage: project.projectImage,    
  })  
    return <>
      <FontAwesomeIcon icon={faPen} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <div className='row'>
                      <div className="col-md-6">
                          <label htmlFor="projectImg">
                              <input type="file" style={{display:'none'}} id='projectImg' />
                              <img src={`${BASE_URL}/uploads/${project.projectImage}`} className='w-100' alt="" />
                          </label>
                      </div>
                      <div className="col-md-6">
                          <div>
                              <input type="text" placeholder='Project Title' value={projectDetails.title} className='form-control mb-3' />
                <input type="text" placeholder='Language Used' value={projectDetails.language} className='form-control mb-3' />
                              <input type="text" placeholder='Github Link' value={projectDetails.github}  className='form-control mb-3' />
                              <input type="text" placeholder='Website Link' value={projectDetails.website} className='form-control mb-3' />
                              <textarea placeholder='Project Overview' value={projectDetails.overview}  rows={4} className='form-control mb-3' ></textarea>
                          </div>
                          

                      </div>
                  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

  </>;
}

export default EditProject;
