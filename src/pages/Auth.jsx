import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginApi, registerApi } from "../services/allApi";
import {toast } from 'react-toastify';


function Auth({ register }) {
  const registerForm = register ? true : false;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.error("Please Fill the Form Completely")
    }
    else {
      const result = await loginApi(userData)
      console.log(result)
      if (result.status === 200) {
        sessionStorage.setItem("loggedUser",JSON.stringify(result.data.data))
        sessionStorage.setItem("token", result.data.token)
        setUserData({
          email: "",
          password: ""
        })
        toast.success("Successfully")
        navigate('/')

      }
      else if (result.status === 400) {
        toast.error(result.response.data)
      }
      else {
        toast.error("Something Happened")
      }

    }
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.warning("Please Fill the Form Completely")
    }
    else {
      const result = await registerApi(userData)
      console.log(result)
      if (result.status === 201) {
        setUserData({
          username: "",
          email: "",
          password: ""
        })
        toast.success(`${username} Successfully Registered`)
        navigate('/login')
      }
      else if (result.status === 400) {
        
        toast.error(result.response.data)
      }
      else {
        toast.error("Something Happened")
      }
    }
  }
  return <>
    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '80vh' }}>
      <div className="container w-75">
        <h5>
          <Link to={'/'} className="tetx-warning fw-bold mb-3" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faArrowLeft} />Back to Home</Link>
        </h5>
        <div className=" shadow rounded">
          <Row>
            <Col md={6} className="p-4 d-flex justify-content-center align-items-center">
              <img className="rounded" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1725519010~exp=1725519610~hmac=aa6a82fc77ff839005efe22290e6d126bfe0b791cf78e651fabe4413d24dbe85" width='70%' alt="" />
            </Col>
            <Col md={6} className="p-5 d-flex justify-content-center bg-light">
              <h4></h4>
              <form className="w-100">
                <h5 className="text-center"> <FontAwesomeIcon icon={faStackOverflow} className="me-3" /> Project Fair</h5>
                {registerForm ?
                  <>

                    <h6 className="text-center mb-3 mt-3 text-info">Sign Up To Your Account</h6>
                    <input type="text" name="" id="" placeholder="Name" className="form-control mb-3" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                  </> :
                  <h6 className="text-center mb-3 mt-3 text-info">Sign In To Your Account</h6>
                }
                <div className="mb-3">
                  <input type="email" placeholder='Email' className="form-control rounded" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="password" placeholder='Password' className="form-control rounded" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                </div>
                {registerForm ?
                  <div>
                    <button className="btn btn-info w-100 rounded " onClick={handleRegister}>Register</button>
                    <p className="mt-3">Already A user? Click Here to <Link to={'/login'} className="ms-2 text-info" style={{ textDecoration: 'none' }} > Login</Link></p>
                  </div> :
                  <div>
                    <button className="btn btn-info w-100 rounded" onClick={handleLogin}>Login</button>
                    <p className="mt-3">Not Registered Yet? Click Here to <Link to={'/register'} className="ms-2 text-info" style={{ textDecoration: 'none' }}> Register</Link></p>
                  </div>
                }
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </>;
}

export default Auth;
