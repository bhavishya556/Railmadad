'use server'
 
import { cookies } from 'next/headers'
 
export async function logoutAdmin() {
    try{
        cookies().delete('usertoken')
        return true;
    }
    catch(error){
        return false;
    }
}