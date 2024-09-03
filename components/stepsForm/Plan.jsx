import React, { useState } from "react";
import TextGenerateEffectDemo from "@/components/Text/TextGenerateEffect";

const Plan = ({ department, setDepartment }) => {


  const words = `We sincerely apologize for the inconvenience. It looks like you've encountered an issue related to ${department}. Don't worry, we're on it and ready to assist you!`;

  const departments = [
    "Cleanliness",
    "Staff Behaviour",
    "Security",
    "Medical Assurance",
    "Ticketing",
    "Water AvailabilitY",
    "Maintenance",
    "Others",
  ];

  const handleDepartmentChange = (e) => {

    setDepartment(e.target.value); // Update the department in parent component if needed
  };

  return (
    <div className="p-4">
      <TextGenerateEffectDemo words={words} />
      
      <div className="mt-4">
        <label htmlFor="department-select" className="block mb-2 text-sm font-medium text-gray-700">
          If the department is incorrect, please select the correct one:
        </label>
        <select
          id="department-select"
          value={department}
          onChange={handleDepartmentChange}
          className="block  p-2 border border-red-800 rounded-md"
        >
          {departments.map((dept) => (
            <option key={dept} value={dept} className="block  p-2 border border-red-800 rounded-md">
              {dept}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Plan;
