import React,{useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Popup = () => {
    const [open, setOpen] = useState(true)
  return (
    <Dialog open={open} onOpenChange={setOpen} >


        <DialogContent className="p-4 py-6 pb-2 bg-red-800">
          <div className=" text-white rounded-lg  max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to RailMadad</h2>
            <p className="text-lg mb-4">Resolve any  issues in 3 eassy steps</p>
            <ul className="text-left mb-4 list-disc list-inside">
              <li>Upload Image or Tell Your issue</li>
              <li>Our AI Model directs it to the right department.</li>
              <li>Enter your PNR number, and we’ll handle the rest!</li>
            </ul>
            <p className="text-sm text-gray-200">Your comfort, our priority!</p>
            <button className='bg-white text-red-700 px-3 py-1 rounded my-3' onClick={()=>setOpen(false)}>Close</button>
          </div>
            <p className='bg-white w-full text-center rounded'>Developed By Team <span className='font-bold'>SmartX (SIH-2024)</span></p>



        </DialogContent>

      </Dialog>
  )
}

export default Popup