import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="shadow p-4">

      <div className="d-flex">

        <h5>Profile</h5>
        <Button variant="info" className="ms-auto" onClick={() => setOpen(!open)}>
          {open ?
            <FontAwesomeIcon icon={faAngleUp} /> :
            <FontAwesomeIcon icon={faAngleDown} />
          }
        </Button>
      </div>
      <Collapse in={open}>
        <div>

          <div className="d-flex justify-content-center align-items-center">
            <label htmlFor="ProfileImg">
              <input type="file" style={{ display: 'none' }} />
              <img src="https://imgs.search.brave.com/oM9tExeJ1sKGxPMpzRsF_7Fscr6pCXT2bP3bjeFhJgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Uv/cHJldmlld3MvMzc0/L2luc3RhYnV0dG9u/LXBuZy1kZXNpZ24t/NTY5MDM5MC5wbmc_/Zm10" width='180px' style={{ borderRadius: '50%' }} alt="" />
            </label>
          </div>

          <div>
            <input type="text" placeholder="Github Link" className="form-control mb-3 mt-3" />
            <input type="text" placeholder="website Link" className="form-control mb-3" />
            <Button variant='info' className="w-100">Update</Button>
          </div>

        </div>
      </Collapse>
    </div>

  </>;
}

export default Profile;
