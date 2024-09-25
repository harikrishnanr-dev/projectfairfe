import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

function MyProject() {
    return <>
        <div className="shadow p-5 mb-5">
            <div className="d-flex mt-4">
                <h5 className="text-success me-auto">My Projects</h5>
                {/* project button component */}
                <AddProject/>
            </div>
            <div className="p-3 mt-4 rounded-2 d-flex bg-light">
                <h5>Media Player</h5>
            <div className="d-flex ms-auto align-items-center">
                <EditProject/>
                <Link className="ms-3 text-body" ><FontAwesomeIcon icon={ faLink}/></Link>
                <Link className="ms-3 text-body"><FontAwesomeIcon icon={faGithub }/></Link>
                <Link className="ms-3"><FontAwesomeIcon icon={faTrash }/></Link>
            </div>
            </div>
        </div>
      
  </>;
}

export default MyProject;
