import axios from "axios";
// httprequest type means type of http call (GET,POST,Put,Delete)
export const commonApi = async (httpRequestType, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequestType,
        url: url,
        data: reqBody,
        headers: reqHeader ? reqHeader : {'Content-Type':'application/json'}
    }
    return await axios(reqConfig).then((result) => {
        return result;
    }).catch((err) => {
        return err;
    })
}