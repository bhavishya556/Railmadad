import axios from "axios"


// export const BASE_URL = 'http://localhost:5000'
export const BASE_URL = 'https://railmadad-backend.vercel.app'


export const axiosInstance = axios.create({});

export const apiConnector = ({ method, url, bodyData, headers }: any) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null
    });
}

export const AdminRoutes_API: any = {
    loginAdmin: "/api/v1/admin/login-admin",
    validateAdmin: "/api/v1/admin/validate-admin",
} 



export const ImagesRoutes_API : any = {
    uploadImages:'/api/v1/images/uploadImages',
    fetchAllIMages: '/api/v1/images/fetchAllImages',
}



export const MainQuery: any = {
    createQuery: "/api/v1/rail/createEntry",
    getEntries: "/api/v1/rail/getEntries",
    changeStatusById: "/api/v1/rail/changeStatusById",
    depCount: "/api/v1/rail/depCount",

  
   
}