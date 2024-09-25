import React from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../components/ProjectCard";

function Project() {
  return <>
    <Header />
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
        <div className="container row my-5 ms-5">
          <div className="col-md-3">
            <ProjectCard/>
      </div>

    </div>
  </>;
}

export default Project;
