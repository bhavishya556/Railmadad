import React, { useState } from "react";
import thankyouIcon from "../assets/images/icon-thank-you.svg";

const Thankyou = ({ Qid }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(Qid).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset the message after 2 seconds
    });
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center py-16">
     
      <div className="font-bold text-black text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
        Your complaint has been successfully submitted! Your Query ID is:{" "}
        <span className="font-bold text-[#02295a]">{Qid}</span>.
        We are processing it and will route it to the appropriate department.
        If you ever need further assistance, please feel free to email us at
        support@railmadad.com.
      </p>
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={handleCopy}
          className="bg-red-700 ] text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
        >
          Copy ID
        </button>
        {copySuccess && (
          <p className="text-green-600 text-sm"> Your Query ID copied to clipboard!</p>
        )}
      </div>
    </div>
  );
};

export default Thankyou;
