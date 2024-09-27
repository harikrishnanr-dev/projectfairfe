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
export const getAllProjectApi = async (reqHeader) => {
    return await commonApi('Get',`${BASE_URL}/project/allproject`,"",reqHeader)
}
export const getUserProjectApi = async (reqHeader) => {
    return await commonApi('Get',`${BASE_URL}/project/userproject`,"",reqHeader)
}