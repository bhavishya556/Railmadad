import React, { useState } from 'react'
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


      <DialogContent className="p-4 md:py-6 py-2 pb-2 md:w-[70%] bg-red-800">
        <div className=" text-white rounded-lg  w-lg flex flex-col items-center text-center">
          <h2 className="md:text-4xl  font-bold md:mb-4 mb-2">Welcome to RailMadad</h2>
          <p className="md:text-lg md:mb-4 mb-2">Resolve any  issues in 3 eassy steps</p>
          <div className="text-left md:grid  md:grid-cols-3 flex flex-col gap-4">
            <div className='flex md:flex-col max-md:flex-row-reverse gap-4'>

              <p className='text-lg max-md:text-sm  text-center p-2 px-4  bg-white rounded text-red-800 max-md:m-auto'>Capture Image or Tell Your issue(no need to fill heavy form)</p>
              <Image width={300} height={300} alt="img" src="/cam.jpg" className='w-full shadow-white shadow-md max-md:h-36 ' />
            </div>
            <div className='flex md:flex-col gap-4 max-md:flex-row-reverse'>

              <p className='text-lg max-md:text-sm text-center p-2 px-4 bg-white rounded text-red-800 max-md:m-auto'>Our AI Model directs it to the right department with you PNR.</p>
              <Image width={300} height={300} alt="img" src="/mob.jpg" className='w-full  shadow-white shadow-md max-md:h-36 ' />
            </div>
            <div className='flex md:flex-col gap-4 max-md:flex-row-reverse'>

              <p className='text-lg  max-md:text-sm  text-center p-2 px-4 bg-white rounded text-red-800 max-md:m-auto'>Rest Railmadad will take care and your problem will solved soon</p>
              <Image width={300} height={300} alt="img" src="/solve.jpg" className='w-full  shadow-white shadow-md max-md:h-36' />
            </div>

          </div>


          <p className="text-sm mt-2 text-gray-200">Your comfort, our priority!</p>
          <button className='bg-white text-red-700 px-3 py-1 rounded md:my-3' onClick={() => setOpen(false)}>Close</button>
        </div>
        <p className='bg-white w-full text-center rounded'>Developed By Team <span className='font-bold'>SmartX (SIH-2024)</span></p>



      </DialogContent>

    </Dialog>
  )
}

export default Popup