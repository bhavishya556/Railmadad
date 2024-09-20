import React,{useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'

const Popup = () => {
    const [open, setOpen] = useState(true)
  return (
    <Dialog open={open} onOpenChange={setOpen} >


        <DialogContent className="p-4 py-6 pb-2 md:w-[70%] bg-red-800">
          <div className=" text-white rounded-lg  w-lg flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to RailMadad</h2>
            <p className="text-lg mb-4">Resolve any  issues in 3 eassy steps</p>
            <div className="text-left grid  grid-cols-3 gap-4">
              <div className='flex flex-col gap-4'>

              <p className='text-lg text-center p-2 px-4  bg-white rounded text-red-800 '>Capture Image or Tell Your issue(no need to fill heavy form)</p>
              <Image width={300} height={300}  alt="img" src="/cam.jpg" className='w-full shadow-white shadow-md '/>
              </div>
              <div className='flex flex-col gap-4'>

              <p className='text-lg text-center p-2 px-4 bg-white rounded text-red-800 '>Our AI Model directs it to the right department with you PNR.</p>
              <Image width={300} height={300}  alt="img" src="/mob.jpg" className='w-full  shadow-white shadow-md '/>
              </div>
              <div className='flex flex-col gap-4'>

              <p className='text-lg text-center p-2 px-4 bg-white rounded text-red-800 '>Rest Railmadad will take care and your problem will solved soon</p>
              <Image width={300} height={300}  alt="img" src="/solve.jpg" className='w-full  shadow-white shadow-md '/>
              </div>
           
            </div>
      

            <p className="text-sm mt-2 text-gray-200">Your comfort, our priority!</p>
            <button className='bg-white text-red-700 px-3 py-1 rounded my-3' onClick={()=>setOpen(false)}>Close</button>
          </div>
            <p className='bg-white w-full text-center rounded'>Developed By Team <span className='font-bold'>SmartX (SIH-2024)</span></p>



        </DialogContent>

      </Dialog>
  )
}

export default Popup