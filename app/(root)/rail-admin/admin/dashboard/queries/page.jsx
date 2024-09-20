"use client";

import { useEffect, useState } from "react";
import { getEntries } from "@/lib/actions/MainQueryEntry/MainQueryEntry";
import Card from "@/components/AdminPanel/Queris/Card"

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [department, setDepartment] = useState("");
  const [loading, setLoading] = useState(true);

  const departments = [
    "Staff Behaviour",
    "Cleanliness",
    "Security",
    "Medical Assurance",
    "Ticketing",
    "Water Availability",
    "Maintenance",
    "other",
  ];

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const response = await getEntries({
        page,
        limit: 2,
        department: department.toLowerCase(),
      });

      if (response.success) {
        setEntries(response.data);
        setTotalPages(response.count); // Assuming `pages` is returned from the backend
      } else {
        console.error("Error fetching entries:", response.message);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching entries:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [page, department]);

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setPage(1); // Reset to the first page when department changes
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Entries</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Filter by Department
        </label>
        <select
          value={department}
          onChange={handleDepartmentChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">All Departments</option>
          {departments.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200">
            {entries.map((entry) => (
              <Card data={entry} key={entry._id}/>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Entries;
