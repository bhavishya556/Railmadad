"use client"
import {useState} from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import  DialogContents  from './DialogContents';


const Table = ({ contacts, totalPages, pageSize, pageNo }) => {
  const [open, setOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const truncateMessage = (message, maxLength) => {
    if (message.length > maxLength) {
      return `${message.substring(0, maxLength)}...`;
    }
    return message;
  };
  const handleViewClick = (contact) => {
    setSelectedContact(contact);
    setOpen(true);
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className="p-8 w-full">
        
            <Dialog open={open} onOpenChange={setOpen} >

              <DialogContents contact={selectedContact}/>
          

           
          
        
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-purple-200">
            <tr>
              <th className="py-2 px-2 text-left">Sno.</th>
              <th className="py-2 px-2 text-left">Name</th>
              <th className="py-2 px-2 text-left">Email</th>
              <th className="py-2 px-2 text-left">Phone</th>
              <th className="py-2 px-2 text-left">BusinessDetails</th>
              {/* <th className="py-2 px-2 text-left">Entity</th> */}
              <th className="py-2 px-2 text-left">Message</th>
              <th className="py-2 px-2 text-left">Date</th>
              {/* <th className="py-2 px-2 text-left">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {contacts?.length > 0 ? (
              contacts.map((contact, index) => (
                <tr  key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"} >
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{((index+1)+((pageNo-1)*20))}</td>
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{truncateMessage(contact.name, 20)}</td>
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{contact.email}</td>
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{contact.phoneNumber}</td>
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{contact.businessDetails}</td>
                  {/* <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{contact.entity}</td> */}
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{truncateMessage(contact.message, 20)}</td>
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{formatDate(contact.createdAt)}</td>
                  <td className="py-2 px-2 whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs"> <DialogTrigger onClick={()=>handleViewClick(contact)} className='p-2 underline text-blue-600 cursor-pointer'>View</DialogTrigger></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-2 px-2 text-center">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-2">
      <div className="flex gap-2">
          <Link
            className={`px-2 py-1.5 bg-purple-600 rounded-md text-sm text-white ${
              pageNo === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            href={{
              pathname: '/en/admin/dashboard/contact',
              query: { pageNo: pageNo > 1 ? pageNo - 1 : 1, pageSize },
            }}
            aria-disabled={pageNo === 1}
          >
            Prev
          </Link>
          
          <Link
            className={`px-2 py-1.5 bg-purple-700 rounded-md text-sm text-white ${
              pageNo >= totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            href={{
              pathname: '/en/admin/dashboard/contact',
              query: { pageNo: pageNo < totalPages ? pageNo + 1 : pageNo, pageSize },
            }}
            aria-disabled={pageNo >= totalPages}
          >
            Next
          </Link>
        </div>
        <p className="font-medium text-sm">
          Page: {pageNo} of {totalPages === 0 ? 1 : totalPages}
        </p>
       
      </div>
      </Dialog>
    </div>
  );
};

export default Table;