"use client"
// import StepForm from "@/components/stepsForm/StepForm"
import ImageUploader from "@/components/ImageUploader/ImageUploader"
import dynamic from "next/dynamic"

const StepForm = dynamic(() => import('@/components/stepsForm/StepForm'), {
  ssr: false,
})
import { useForm, FormProvider } from "react-hook-form";


export default function Home() {
  const methods = useForm();
  return (
    <div className="w-full overflow-x-hidden min-h-[80vh] bg-white">
      
      <StepForm />
   
 





    </div>
  )
}
