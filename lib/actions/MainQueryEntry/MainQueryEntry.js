"use server"
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'


import { apiConnector, BASE_URL, MainQuery } from "@/lib/services/apis";



export const createQuery = async (values) => {
    // console.log(FormData)
 
    try{
        const API = BASE_URL + MainQuery.createQuery;
        
        const res = await apiConnector({
            method: "POST",
            url: API,

            bodyData: values,
        });
        // revalidatePath('/en/admin/dashboard/careers');
        // revalidatePath('/career');

        return res.data;
    }
     catch (error) {
        if(error?.response?.data){
            return error.response.data;
        }
        else{
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
}

// export const fetchAllApplicantsCv = async ({
//     pageNo=1,
//     pageSize=25,
    
// }) => {
   

//     const cookieStore = cookies();
//     const authtoken = cookieStore.get('usertoken')
//     try{
//         let API = BASE_URL + DirectCv.fetchAllApplicantsCv + `?pageNo=${pageNo}&pageSize=${pageSize}`;
    
        
//         const res = await apiConnector({
//             method: "GET",
//             url: API,
//             headers: { authtoken: authtoken?.value },
//         });
     
//         return res.data;
//     }
//     catch (error) {
   
//         if (error?.response?.data) {
//             return error.response.data;
//         }
//         else {
//             return {
//                 success: false,
//                 message: "Server Error"
//             }
//         }
//     }
// }



