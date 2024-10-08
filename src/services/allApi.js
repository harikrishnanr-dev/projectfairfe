import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonApi"
//register API
export const registerApi = async (userDetails) => {
    return await commonApi("POST",`${BASE_URL}/user/register`,userDetails,"")
}

//login Api

export const loginApi = async (userDetails) => {
    return await commonApi('POST',`${BASE_URL}/user/login`,userDetails,"")
    
}

//add project

export const addProjectApi = async (projectDetails,reqHeader) => {
    return await commonApi('POST',`${BASE_URL}/project/addproject`,projectDetails,reqHeader)
    
}

//
export const getHomeProjectApi = async () => {
    return await commonApi('Get',`${BASE_URL}/project/homeproject`,"","")
}

//get all projects

export const getAllProjectApi = async (reqHeader,searchKey) => {
    return await commonApi('Get',`${BASE_URL}/project/allproject?search=${searchKey}`,"",reqHeader)
}
//query param syntax
//path?key=value
export const getUserProjectApi = async (reqHeader) => {
    return await commonApi('Get',`${BASE_URL}/project/userproject`,"",reqHeader)
}

//update project
export const editUserProjectApi = async (projectId, reqBody,reqHeader) => {
    return await commonApi('PUT', `${BASE_URL}/project/editproject/${projectId}`,reqBody,reqHeader)
}

// delete Project
export const deleteProjectApi = async(projectId,reqHeader)=> {
    return await commonApi('DELETE', `${BASE_URL}/project/delete/${projectId}`, {},reqHeader)
}