import React, { useState } from 'react';
import {changeStatusById} from "@/lib/actions/MainQueryEntry/MainQueryEntry"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const Card = ({ data, onStatusChange }) => {

    
  const { toast } = useToast();
  const {
    text,
    department,
    imgurl,
    name,
    email,
    phone,
    pnr,
    des,
    createdAt,
    status // Added status field
  } = data;

  // Local state to manage the status dropdown
  const [currentStatus, setCurrentStatus] = useState(status);

  // Handle status change
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setCurrentStatus(newStatus);
    // Call the onStatusChange prop with new status and data ID
    const res = await changeStatusById(data._id, newStatus);
    if(res.success){
        toast({
            variant: "success",
            description: `Status change to ${res.data.status}`,
       
          })

    }
 
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 p-4">
      <div className="flex flex-col md:flex-row">
        {imgurl ? (
          <img
            src={imgurl}
            alt="Entry"
            className="w-full md:w-1/4 h-48 object-cover rounded-md md:mr-4"
          />
        ) : (
          <div className="w-full md:w-1/4 h-48 bg-gray-200 rounded-md md:mr-4 flex items-center justify-center">
            <p className="text-gray-500">No Image</p>
          </div>
        )}
        <div className="flex-1">
          {text && (
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{text || 'No Description'}</h2>
          )}
          <p className="text-sm text-gray-600 mb-2">
            <strong>Department:</strong> {department || 'Not Specified'}
          </p>
          {name && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>Name:</strong> {name}
            </p>
          )}
          {email && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>Email:</strong> {email}
            </p>
          )}
          {phone && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>Phone:</strong> {phone}
            </p>
          )}
          {pnr && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>PNR:</strong> {pnr}
            </p>
          )}
          {des && (
            <p className="text-sm text-gray-600 mb-2">
              <strong>Description:</strong> {des}
            </p>
          )}
          <p className="text-sm text-gray-500 mb-2">
            <strong>Created At:</strong> {new Date(createdAt).toLocaleDateString()}
          </p>
          <div className="mt-2">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={currentStatus}
              onChange={handleStatusChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="pending">Pending</option>
              <option value="under department">Under Department</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
