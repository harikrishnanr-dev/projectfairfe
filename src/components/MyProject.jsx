import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import { deleteProjectApi, getUserProjectApi } from "../services/allApi";
import { addProjectResponseContext, editProjectResponseContext } from "../context/ContextShare";
import { toast } from "react-toastify";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userProject, setuserProject] = useState([])
    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext);
    const { editProjectResponse, setEditProjectResponse } = useContext(editProjectResponseContext);
    const getUserProjects = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const result = await getUserProjectApi(reqHeader);
        console.log(result);
        setuserProject(result.data)

    }
    useEffect(() => {
        getUserProjects();
    }, [addProjectResponse, editProjectResponse])
    
    const handleDelete = async (id) => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const result = await deleteProjectApi(id, reqHeader);
        console.log("delete");
        console.log(result);
        if (result.status === 200) {
            toast.success("Project Deleted Successfully")
            getUserProjects();
            handleClose();

        }
        else {
            toast.danger("Something failed")
        }
    }
    return <>
        <div className="shadow p-5 mb-5">
            <div className="d-flex mt-4">
                <h5 className="text-success me-auto">My Projects</h5>
                {/* project button component */}
                <AddProject />
            </div>
            {
                userProject?.length > 0 ?
                    userProject.map((item) => (
                        <div className="p-3 mt-4 rounded-2 d-flex bg-light">
                            <h5>{item?.title}</h5>
                            <div className="d-flex ms-auto align-items-center">
                                <EditProject project={item} />
                                <Link to={item.website} target='_blank' className="ms-3 text-body" ><FontAwesomeIcon icon={faLink} /></Link>
                                <Link to={item.github} target='_blank'className="ms-3 text-body"><FontAwesomeIcon icon={faGithub} /></Link>
                                <button className="btn text-danger" onClick={handleShow} ><FontAwesomeIcon icon={faTrash} /></button>
                                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You confirm To Delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDelete(item._id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

                               
                            </div>
                        </div>
                    )) :
                    <p> No Projects Found</p>
            }
        </div>

    </>;
}

export default MyProject;
