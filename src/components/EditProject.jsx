import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from "../services/baseurl";
import { toast } from "react-toastify";
import { editUserProjectApi } from "../services/allApi";
import { editProjectResponseContext } from "../context/ContextShare";

function EditProject({ project }) {

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");
  const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    id: project._id,
    title: project.title,
    language: project.language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectImage: "",
  })
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(projectDetails);
    
    const { title, language, github, website, overview, projectImage, id } = projectDetails;  
    if (!title || !language || !github || !website || !overview || !id) {
      toast.error("Please Fill The Form completely")
    }
    else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("language", language);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("overview", overview);
      //reqBody.append("projectImage", projectImage)
      console.log(reqBody);
      
      preview ? reqBody.append("projectImage", projectImage) :
        reqBody.append("projectImage", project.projectImage)
        const token = sessionStorage.getItem("token");
        if (preview) {
          const reqHeader = {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}` // If your API requires an authorization token
          }

          const result = await editUserProjectApi(id, reqBody, reqHeader);
          console.log("/ update project result /");
          console.log(result);
          if (result.status === 200)
          {
            handleClose();
            setEditProjectResponse(result)
          }
        }
        else {
          const reqHeader = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // If your API requires an authorization token
            
          }
          const result = await editUserProjectApi(id, reqBody, reqHeader);
          console.log("/ update project result /");
          console.log(result);
          if (result.status === 200)
            {
            handleClose();
            setEditProjectResponse(result)
            }
        }
      } 
}
useEffect(() => {
  console.log(projectDetails)
  if (projectDetails.projectImage) {
    setPreview(URL.createObjectURL(projectDetails.projectImage))
  }
}, [projectDetails.projectImage])
  
  const handleClose1 = () => {
    handleClose();
    setProjectDetails({
      id: project._id,
    title: project.title,
    language: project.language,
    github: project.github,
    website: project.website,
    overview: project.overview,
    projectImage: "",
    })
    setPreview("") // for image
  }
return <>
  <FontAwesomeIcon icon={faPen} onClick={handleShow} />
  <Modal show={show} onHide={handleClose} size={"lg"}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Project</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className='row'>
        <div className="col-md-6">
          <label htmlFor="projectImg">
            <input type="file" style={{ display: 'none' }} id='projectImg'
              onChange={(e) => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
            <img src={preview ? preview : `${BASE_URL}/uploads/${project?.projectImage}`} className='w-100' alt=""
            />
          </label>
        </div>
        <div className="col-md-6">
          <div>
            <input type="text" placeholder='Project Title' value={projectDetails.title} className='form-control mb-3'
              onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
            <input type="text" placeholder='Language Used' value={projectDetails.language} className='form-control mb-3'
              onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })} />
            <input type="text" placeholder='Github Link' value={projectDetails.github} className='form-control mb-3'
              onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
            <input type="text" placeholder='Website Link' value={projectDetails.website} className='form-control mb-3'
              onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
            <textarea placeholder='Project Overview' value={projectDetails.overview} rows={4} className='form-control mb-3'
              onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}></textarea>
          </div>


        </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleClose1}>
        Cancel
      </Button>
      <Button variant="success" onClick={handleUpdate}>
        Update
      </Button>
    </Modal.Footer>
  </Modal>

</>;
}

export default EditProject;
