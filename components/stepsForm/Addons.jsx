import React from "react";

const Addons = ({ phone, pnr, email, name, setPnr, setEmail, setName, setPhone,setDes,des }) => {
  console.log(des)
  const handleSubmit = async (e) => {
    e.preventDefault();
 


    // Validate form fields
    if (!pnr) {
      toast({
        variant: "destructive",
        description: "Please fill PNR",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.error("PNR is requried");
      return;
    }
    // Email validation
    if(email){

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailPattern)) {
        toast({
          variant: "destructive",
          description: "Please enter a valid email address",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        console.error("Please enter a valid email address");
        return;
      }
    }

    // Phone number validation
    if(phone){

      const phonePattern = /^\d{10}$/;
      if (!phone.match(phonePattern)) {
      toast({
        variant: "destructive",
        description: "Please enter a valid phone number (10 digits)",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.error("Please enter a valid phone number (10 digits)");
      return;
    }
    
  }


    try {


      const res = await registerEnquiry({name,email,pnr,phone});
      if (res.success) {

        toast({
          variant: "success",
          description: "Our team will contact you soon",

        })
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          businessDetails: "",
          message: "",
        });
      }

    } catch (error) {
      // Handle errors (e.g., show error message)
      toast.error("Failed to send email");
      // console.error("Error sending email:", error);
    }
  };

  return (
    <div className="max-w-md m-2  bg-white rounded-lg p-6 ">
      {/* <SectionHeading title="Add Your Details" /> */}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pnr" className="block text-sm font-medium text-gray-700">
            PNR (Required) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="pnr"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Enter your PNR"
          />
        </div>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Enter your name (optional)"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email (we will update status by email)
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Enter your email (optional)"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Enter your phone number (optional)"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Additional Info
          </label>
          <textarea
            type="text"
            id="des"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="Anything you want to tell(optional)"
          />
        </div>

        {/* <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Submit
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Addons;
