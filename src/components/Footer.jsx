import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faReddit, faSquareFacebook, faStackOverflow, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="d-flex justify-content-center align-items-center bg-success p-3">
			<div className="footer d-flex align-items-center justify-content-evenly">
				<div style={{ width: "400px" }}>
					<h5 className="textStyle">
						<FontAwesomeIcon
							icon={faStackOverflow}
							style={{ color: "#FFD43B" }}
							className="me-3"
						/>
						
										Project Fair	

						
					</h5>
					<p style={{ textAlign: "justify" }} className="textStyle">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
						quidem soluta recusandae enim pariatur nam magnam adipisci cumque ea
						nesciunt, itaque fugiat debitis, illo corporis. Obcaecati quas
						tempore nesciunt non!
					</p>
				</div>
				<div className="d-flex flex-column ms-5">
					<h4 className="textStyle">Links</h4>
					<Link to="/" style={{ textDecoration: "none", color: "white" }}>
					Home
					</Link>
					<Link to="/dashboard" style={{ textDecoration: "none", color: "white" }}>
						Dashboard
					</Link>
					<Link to="/project" style={{ textDecoration: "none", color: "white" }}>
						Project
					</Link>
				</div>

				<div className="d-flex flex-column ms-5">
					<h4 className="textStyle">Guides</h4>
					<Link
						to="https://react.dev/"
						target="_blank"
						style={{ textDecoration: "none", color: "white" }}
					>
						React
					</Link>
					<Link
						to="https://react-bootstrap.netlify.app/"
						target="_blank"
						style={{ textDecoration: "none", color: "white" }}
					>
						React Bootstrap
					</Link>
					<Link
						to="https://www.npmjs.com/package/json-server"
						target="_blank"
						style={{ textDecoration: "none", color: "white" }}
					>
						Json Server
					</Link>
				</div>

				<div className="ms-5">
					<h4 className="textStyle">Contact Us</h4>
					<div className="d-flex">
						<input
							type="text"
							className="form-control"
							placeholder="Enter Your Email Id"
						/>
						<button className="btn btn-warning ms-2">Subscribe</button>
					</div>
						<div className=" d-flex justify-content-evenly align-items-center mt-3">						
							<Link to='https://www.instagram.com/' target="_blank"><FontAwesomeIcon icon={faInstagram} size='2x' style={{borderRadius: '5px',background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%' , color: 'white', padding:'4px'}}/></Link>
							<Link to='https://www.facebook.com/' target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size='2x' style={{color: "#2168e4"}} /></Link>
							<Link to='https://www.x.com/' target="_blank"><FontAwesomeIcon icon={faXTwitter} size='2x' style={{color:'white'}}/></Link>
							<Link to='https://www.reddit.com/' target="_blank"><FontAwesomeIcon icon={faReddit} size='2x' style={{color:'#ff0000'}}/></Link>
						</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
