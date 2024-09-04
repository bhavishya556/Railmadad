"use server"
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'


import { apiConnector, BASE_URL, MainQuery } from "@/lib/services/apis";



export const createQuery = async (values) => {
 
 
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

export const getEntries = async ({
    page=1,
    limt=25,
    department
    
}) => {
   

    const cookieStore = cookies();
    const authtoken = cookieStore.get('usertoken')
    try{
        let API = BASE_URL + MainQuery.getEntries + `?page=${page}&limt=${limt}&department=${department}`;
    
        
        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: { authtoken: authtoken?.value },
        });
    
     
        return res.data;
    }
    catch (error) {
   
        if (error?.response?.data) {
            return error.response.data;
        }
        else {
            return {
                success: false,
                message: "Server Error"
            }
        }
    }
}
//change status
export const changeStatusById = async (id, status) => {

    const cookieStore = cookies();
    const authtoken = cookieStore.get('usertoken');
    try {
        const API = BASE_URL + MainQuery.changeStatusById;
        const res = await apiConnector({
            method: "POST",
            url: API,
            headers: { authtoken: authtoken?.value },
            bodyData: { id, status }
        });

        return res.data;
    } catch (error) {
        if (error?.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: "Server Error"
            };
        }
    }
}
export const depCount = async () => {

    const cookieStore = cookies();
    const authtoken = cookieStore.get('usertoken');
    try {
        const API = BASE_URL + MainQuery.depCount;
        console.log(API)
        const res = await apiConnector({
            method: "GET",
            url: API,
            headers: { authtoken: authtoken?.value },
        
        });
    
        return res;
    } catch (error) {
        if (error?.response?.data) {
            return error.response.data;
        } else {
            return {
                success: false,
                message: "Server Error"
            };
        }
    }
}


