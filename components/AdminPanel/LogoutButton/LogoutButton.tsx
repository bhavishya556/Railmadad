"use client"
import { IoMdLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation'
import { logoutAdmin } from '@/lib/actions/AdminActions/logoutAdmin';

const LogoutButton =  () => {
    const router = useRouter()
    const handleClick = async( ) => {
        const res = await logoutAdmin();
        if(res){
            router.push('/')
        }
    }

    return (
        <div className="p-1 rounded-full bg-red-100 fixed top-4 md:top-6 right-6 md:right-8 cursor-pointer" onClick={handleClick}>
            <IoMdLogOut className="text-red-800 text-2xl" />
        </div>
    )
}

export default LogoutButton;