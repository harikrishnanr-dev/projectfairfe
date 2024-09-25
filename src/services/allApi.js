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