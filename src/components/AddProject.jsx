import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectApi } from '../services/allApi';
import { toast } from 'react-toastify';

function AddProject() {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    language: '',
    github: '',
    website: '',
    overview: '',
    projectImage: '',

  })
  const [preview, setPreview] = useState("");
  useEffect(() => {

    console.log(projectDetails)
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])
  const handleAddProject = async (e) => {
    e.preventDefault();
    const { title, language, github, website, overview, projectImage } = projectDetails;
    if (!title || !language || !github || !website || !overview || !projectImage) {
      toast.error("Please Fill The Form completely")
    }
    else {
      //here we are uploading a file  so we should send body in the form of form Data
      const reqBody = new FormData();
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)
      //here content type we are passing is multipart form data so specific 
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}` // If your API requires an authorization token

      }
      const result = await addProjectApi(reqBody, reqHeader);
      if (result.status === 200) {
        toast.success(`${title} Uploaded Successfully`);
        setProjectDetails({
          title: '',
          language: '',
          github: '',
          website: '',
          overview: '',
          projectImage: '',

        }
        )
        setPreview("");
        handleClose();
      }
      else if (result.status === 409) {
        toast.success(`${title} already exist`);

      }
      else {
        toast.success(`${title} Upload failed`);

      }
    }
  }
  const handleClose1 = () => {
    handleClose();
    setPreview("");
    setProjectDetails({
      title: '',
      language: '',
      github: '',
      website: '',
      overview: '',
      projectImage: '',

    })
  }

  return (
    <>
      <Button variant="info" onClick={handleShow}>Add Project
      </Button>

      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-md-6">
              <label htmlFor="projectImg">
                <input type="file" style={{ display: 'none' }} id='projectImg'
                  onChange={(e) => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} />
                <img src={preview ? preview : "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} className='w-100' alt="" />
              </label>
            </div>
            <div className="col-md-6">
              <input type="text" placeholder="Project Title"
                value={projectDetails.title}
                onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })}
                className="form-control mb-3" />
              <input type="text" placeholder="Language Used"
                value={projectDetails.language}
                onChange={(e) => setProjectDetails({ ...projectDetails, language: e.target.value })}
                className="form-control mb-3" />
              <input type="text" placeholder="Github Link"
                value={projectDetails.github}
                onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })}
                className="form-control mb-3" />
              <input type="text" placeholder="Website Link"
                value={projectDetails.website}
                onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })}
                className="form-control mb-3" />
              <textarea placeholder="Project Overview"
                value={projectDetails.overview}
                onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })}
                rows={4} className="form-control mb-3"></textarea>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddProject}>
            Add
          </Button>
        </Modal.Footer>
      </Modal >
    </>
  );
}

export default AddProject;