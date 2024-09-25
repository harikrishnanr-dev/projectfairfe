import React from "react";
import MyProject from "../components/MyProject";
import Profile from "../components/Profile";

function Dashboard() {
    const userData = JSON.parse(sessionStorage.getItem("loggedUser"));
    console.log(userData);
    return <>
        <div className="container-fluid">
            <h4 className="ms-4 my-4 text-warning">
                Welcome <span >{userData?.username} </span>
            </h4>
            <div className="row">
                <div className="col-md-8">
                    {/* Project Component */}
                    <MyProject />
                </div>
                <div className="col-md-4">
                    {/* Project Component */}
                    <Profile/>
                </div>

            </div>
        </div>

    </>;
}

export default Dashboard;
