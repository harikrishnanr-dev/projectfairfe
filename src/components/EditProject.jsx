import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProject() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                              <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" className='w-100' alt="" />
                          </label>
                      </div>
                      <div className="col-md-6">
                          <div>
                              <input type="text" placeholder='Project Title' className='form-control mb-3' />
                              <input type="text" placeholder='Language Used' className='form-control mb-3' />
                              <input type="text" placeholder='Github Link' className='form-control mb-3' />
                              <input type="text" placeholder='Website Link' className='form-control mb-3' />
                              <textarea placeholder='Project Overview' rows={4} className='form-control mb-3' ></textarea>
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
