import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import { getUserProjectApi } from "../services/allApi";
import { addProjectResponseContext } from "../context/ContextShare";

function MyProject() {
    const [userProject, setuserProject] = useState([])
    const { addProjectResponse, setAddProjectResponse } = useContext(addProjectResponseContext);
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
    }, [addProjectResponse])
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
                                <Link className="ms-3 text-body" ><FontAwesomeIcon icon={faLink} /></Link>
                                <Link className="ms-3 text-body"><FontAwesomeIcon icon={faGithub} /></Link>
                                <Link className="ms-3"><FontAwesomeIcon icon={faTrash} /></Link>
                            </div>
                        </div>
                    )) :
                    <p> No Projects Found</p>
            }
        </div>

    </>;
}

export default MyProject;
