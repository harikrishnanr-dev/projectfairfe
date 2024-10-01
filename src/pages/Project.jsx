import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";
import { getAllProjectApi } from "../services/allApi";
import { Link } from "react-router-dom";

function Project() {
  const [allProject, setAllProject] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [isToken, setIsToken] = useState(false)
  const getAllProject = async () => {
    console.log('search Key', searchKey);
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` // If your API requires an authorization token

      }
      const result = await getAllProjectApi(reqHeader, searchKey);
      console.log("User Project");
      console.log(result)
      setAllProject(result.data); // Update the state with the fetched projects
    }
  }
  useEffect(() => {
    getAllProject(); // Fetch all projects on component mount
  }, [searchKey]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true)
    }
  }, [])
  return  <>
    <div className="container-fluid">
      <h3 className="text-center mt-5"> All Projects</h3>
    </div>
    {
      isToken ? 
      <div>
      <div className='row my-4'>
          <div className='col-md-4'></div>
          <div className='col-md-4 d-flex'>
              <input type="text" className='form-control' placeholder='Search By Technology'
                  onChange={(e) => setSearchKey(e.target.value)}
              />
              <span className="input-group-text">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            </div>
                            <div className='col-md-4'></div>
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
                    </div> :
                    <div className='d-flex justify-content-center align-items-center flex-column'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Please_log_in_image.png" alt="" height="300px" width="400px" />

                        <p className='m-5'> Please
                            <Link className='text-danger ms-3' to={'/login'} style={{ textDecoration: 'none', color: 'blue' }} >Login</Link> To View All projects
                        </p>
                    </div>
            }


        </>
    
}

export default Project;
