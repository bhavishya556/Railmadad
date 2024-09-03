"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const DialogContents = ({contact}) => {
  return (
    <DialogContent>
     <div>
      <h2 className="text-xl font-bold mb-4">Contact Details</h2>
      <p><strong>Name:</strong> {contact?.name}</p>
      <p><strong>Email:</strong> {contact?.email}</p>
      <p><strong>Phone:</strong> {contact?.phone}</p>
      <p><strong>Contact As:</strong> {contact?.contactAs}</p>
      <p><strong>Entity:</strong> {contact?.entity}</p>
      <div className="whitespace-pre-line break-words"> {contact?.message}</div>
      <p><strong>Date:</strong> {new Date(contact?.createdAt).toLocaleString()}</p>
    </div>
</DialogContent>
  )
}

export default DialogContents