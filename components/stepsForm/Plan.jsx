import React, { useState,useEffect } from "react";
import TextGenerateEffectDemo from "@/components/Text/TextGenerateEffect";
import TextGenerateEffectDemo2 from "@/components/Text/TextGenerateEffect2";

const Plan = ({ department, setDepartment ,aboutImg,setAboutImg }) => {



  const words = `We sincerely apologize for the inconvenience. It looks like you've encountered an issue related to ${(department == "Other")?("any other department"):(department)}. Don't worry, we're on it and ready to assist you!`;

  const departments = [
    "Other",
    "Cleanliness",
    "Staff Behaviour",
    "Security",
    "Medical Assurance",
    "Ticketing",
    "Water AvailabilitY",
    "Maintenance",
  ];

  // useEffect(() => {
  //   if (!departments.includes(department)) {
  //     setDepartment(departments[0]); // Default to the first option if invalid
  //   }
  // }, [department, setDepartment, departments]);





  const handleDepartmentChange = (e) => {

    setDepartment(e.target.value); // Update the department in parent component if needed
  };

  return (
    <div className="p-4">
      <TextGenerateEffectDemo words={words} />
      {aboutImg && ( 
        <div className="bg-slate-200 mt-2 p-4 rounded-xl">
      <p className="font-semibold text-xl">Image Analysis</p>
      <TextGenerateEffectDemo2 words={aboutImg} />



      </div>)}
      
      <div className="mt-4">
        <label htmlFor="department-select" className="block mb-2 text-sm font-medium text-gray-700">
          If the department is incorrect, please select the correct one:
        </label>
        <select
          id="department-select"
          value={department || ""}
          onChange={handleDepartmentChange}
          placeholder="select department"
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
