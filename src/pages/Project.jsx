import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";
import { getAllProjectApi } from "../services/allApi";

function Project() {
  const [allProject, setAllProject] = useState([])
  const getAllProject = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` // If your API requires an authorization token

      }
      try {
        const result = await getAllProjectApi(reqHeader);
        if (result) {
          setAllProject(result.data); // Update the state with the fetched projects
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    }
  };

  useEffect(() => {
    getAllProject(); // Fetch all projects on component mount
  }, []);

  return <>
    <div className="container-fluid">
      <h3 className="text-center mt-5"> All Projects</h3>
    </div>
    <div className="row my-3">
      <div className="col-md-4"></div>
      <div className="col-md-6">
        <div className="input-group justify-content-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search By technology"
          />
          <span className="input-group-text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <div className="col-md-4"></div>
        </div>
      </div>

    </div>
    <div className='container row my-5 ms-5'>

                {
                    allProject.length > 0 ?
                        allProject.map((item) => (
                            <div className='col-md-3'>
                                <ProjectCard project={item} />
                            </div>
                        )) :
                        <p>No Projects found</p>
                }

            </div>
  </>;
}

export default Project;
