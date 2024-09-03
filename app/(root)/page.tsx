"use client"
// import StepForm from "@/components/stepsForm/StepForm"

import dynamic from "next/dynamic"

const StepForm = dynamic(() => import('@/components/stepsForm/StepForm'), {
  ssr: false,
})
const Popup = dynamic(() => import('@/components/Home/Popup'), {
  ssr: false,
})

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react"


export default function Home() {

  const methods = useForm();
  return (
    <div className="w-full overflow-x-hidden min-h-[80vh] bg-white">
      <Popup/>


    

      <StepForm />







    </div>
  )
}
