"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ImageScan = dynamic(() => import('./ImageScan'), {
  ssr: false,
})
const Plan = dynamic(() => import('./Plan'), {
  ssr: false,
})

import Step from "./Step";
import Addons from "./Addons";

import Thankyou from "./Thankyou";


import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import MultiStepLoaderDemo from "@/components/Loader/MultiStepLoaderDemo"

import { getDepartmentByText } from "@/lib/actions/ModelActions/modelAction"
import { getDepartmentByImg } from "@/lib/actions/ModelActions/modelAction"
import { createQuery } from "@/lib/actions/MainQueryEntry/MainQueryEntry"


const Form = () => {

  //------------------------------STATES------------------------------
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [analysis, setAnalysis] = useState(false);
  const [steps, setSteps] = useState([
    { id: 1, title: "Analyze", active: true },
    { id: 2, title: "Department", active: false },
    { id: 3, title: "Additional Info", active: false },

  ]);

  const [img, setImg] = useState();

  const [text, setText] = useState();
  const [department, setDepartment] = useState("Health");
  const [imgurl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pnr, setPnr] = useState("");
  const [des, setDes] = useState("");
  const [Qid, setQid] = useState("");

  // console.log("img =", imgurl, "text = ", text)




  const [displayThankyou, setDisplayThankyou] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }

  }, [
    stepNumber]);

  //------------------------------SIDE EFFECTS------------------------------






  //------------------------------FUNCTIONS------------------------------

  //send all data
  const createMainQueary = async () => {

    if(!pnr){
      toast({
        variant: "destructive",
        description: "PNR is requried",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return
    }

    const lowerCaseDepartment = department.toLowerCase();
    const data = {
      des,
      pnr,
      phone,
      email,
      name,
      imgurl,
      department:lowerCaseDepartment,
      text

    }

    const res = await createQuery(data);
    // console.log("main",res)
    setQid(res.data._id);
    setDisplayThankyou(true)

  }
  const nextStep = async () => {





    if (stepNumber == 1) {

      if (!imgurl && !text) {
        toast({
          variant: "destructive",
          description: "You have to choose one",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        return
      }

      //if text
      if (text) {
        setAnalysis(true);
        const res = await getDepartmentByText(text);
        setDepartment(res)
        console.log(res)

        setTimeout(() => {
          setAnalysis(false);
          setStepNumber((prevStep) => prevStep + 1);

        }, 3000)
      }


      //if img  
      if (imgurl) {
        setAnalysis(true);
        const res = await getDepartmentByImg(imgurl);
        setDepartment(res)
        console.log(res)

        setTimeout(() => {
          setAnalysis(false);
          setStepNumber((prevStep) => prevStep + 1);

        }, 3000)


      }
      



    }

    if (stepNumber == 2) {
      setStepNumber((prevStep) => prevStep + 1);
    }

    if (stepNumber == 3) {
      createMainQueary()
     

    }

  };


  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };



  return (
    <div className=" md:px-36 md:mt-20  my-5 ">

      <h1 className="text-center text-2xl md:text-4xl  font-semibold text-red-700 mb-5">RailMadad</h1>
      {
        analysis && (

          <MultiStepLoaderDemo />
        )
      }
      <div className="bg-red-700 rounded-xl  md:p-3 flex max-md:flex-col-reverse p-1 justify-center">
        <div className="p-4">
          {/* <img
            className="hidden md:block"
            src={BackgroundSidebar}
            alt="sidebar"
          />
          <img
            className="block md:hidden w-full"
            src={BackgroundSidebarMobile}
            alt="topbar"
          /> */}

          <div className="flex justify-center md:flex-col gap-5">
            {steps.map((step) => (
              <Step
                key={step.id}
                number={step.id}
                title={step.title}
                active={step.active}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:justify-between  w-full  rounded-2xl md:mx-8 px md:px-16 md:pt-10 pb-16 bg-white  md:py-5 ">
          {(displayThankyou && (
            //<div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
            <>
              <Thankyou Qid={Qid} />
            </>
            //</div>
          )) || (
              // <div className="flex flex-col justify-between absolute top-40 w-[450px] md:static mb-40 rounded-2xl mx-8 px-16 pt-10 pb-16 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
              <>
                <div>
                  {(stepNumber === 1 && (
                    <ImageScan
                      setImg={setImg}
                      img={img}
                      setText={setText}
                      text={text}
                      setImgUrl={setImgUrl}
                      imgurl={imgurl}

                    />
                  )) ||
                    (stepNumber === 2 && (
                      <Plan
                        department={department}
                        setDepartment={setDepartment}

                      />
                    )) ||
                    (stepNumber === 3 && (
                      <Addons
                        setName={setName}
                        name={name}
                        setEmail={setEmail}
                        email={email}
                        pnr={pnr}
                        setPnr={setPnr}
                        setPhone={setPhone}
                        phone={phone}
                        setDes={setDes}
                        des={des}
                      />
                    ))
                    // (stepNumber === 4 && (
                    //   <Summary
                    //     selectedPlan={plan}
                    //     selectedAddons={addons}
                    //     currentStep={stepNumber}
                    //     planDuration={planDuration}
                    //     planDurationName={planDurationName}
                    //     onChangeClick={changeClick}
                    //   />
                    // ))
                  }
                </div>
                <div className="flex justify-between  md:px- bottom-0 left-0 w-full bg-white p-5  md:p-0 ">
                  {stepNumber != 1 && (
                    <div
                      onClick={prevStep}
                      className={`font-medium text-red-700 border border-red-700 rounded flex justify-center items-center px-2 cursor-pointer transition duration-100 hover:text-white hover:bg-red-700 ${goBackVisible}`}
                    >
                      Go back
                    </div>
                  )}
               
                  {stepNumber === 3 ? (
                    <div
                      onClick={nextStep}
                      className="font-medium bg-red-700 select-none animate-bounce text-white py-3 px-5 rounded-lg cursor-pointer transition hover:opacity-90"
                    >
                      Confirm
                    </div>
                  ) : (
                    <div
                      onClick={nextStep}
                      className="font-medium bg-red-700 select-none text-white py-3 px-5 rounded-lg md:mr-5 cursor-pointer transition duration-100 hover:opacity-90"
                    >
                      Next Step
                    </div>
                  )}
                </div>
              </>
              // </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Form;
