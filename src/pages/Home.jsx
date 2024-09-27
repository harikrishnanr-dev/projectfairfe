import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import home_image from '../assets/homeimage.jpg'
import ProjectCard from "../components/ProjectCard";
import { getHomeProjectApi } from "../services/allApi";


function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [homeProject, setHomeProject] =useState([])
  const getHomeProjectItems = async () => {
    const result = await getHomeProjectApi();
    console.log(result);
    setHomeProject(result.data);
  }
  useEffect(
    () => {
      if (sessionStorage.getItem("token")) {
        setIsLogin(true)
      }
      getHomeProjectItems();
  },[])
  return <>
    <div className="container-fluid bg-success p-4 mb-4" style={{ width: '100%', height: '75vh' }}>
      
    <Row>
      <Col md={6} className="d-flex justify-content-center align-items-center flex-column">
        <div>
          <h3 className="text-light">Project Fair</h3>
          <h6>One Stop destination For may software projects</h6>
          </div>
          {
            isLogin ?
        <Link to={'/dashboard'}>
        <button className="btn btn-outline-light my-4">Manage Project</button>
        </Link>:
        <Link to={'/login'}>
        <button className="btn btn-outline-light my-4">Get Started</button>
        </Link>
              
          }
      </Col>
      <Col md={6}><img src={home_image} width='75%' alt="" class="rounded" /></Col>
    </Row>
    </div>
    <div className="container-fluid mb-5">
      <h2 className="text-center my-5">Explore Our Projects</h2>
      <marquee scrollamount={20}>
        <div className="row">
          {
            homeProject?.length > 0 ?
              homeProject.map((item) => (
                <div className="col-md-4 justify-content-center d-flex p-4" style={{ width: '400px' }}>
                  <ProjectCard project={item} />
              </div>
              )) :
              <p>No Projects</p>
          }
       
        
      </div>
      </marquee>
      <Link to={'/project'} style={{textDecoration:'none'}}>
      <h5 className="text-primary text-center">See More Projects</h5></Link>
    </div>
  </>;
}

export default Home;
