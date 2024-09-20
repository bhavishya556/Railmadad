import React, { useState, useRef ,useEffect} from "react";
import Webcam from "react-webcam";
import ImageUploader from "@/components/ImageUploader/ImageUploader";
import { useForm, FormProvider } from "react-hook-form";
import { GrScan } from "react-icons/gr";
import { TiDocumentText } from "react-icons/ti";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { ImMobile2 } from "react-icons/im";
import MultiStepLoaderDemo from "@/components/Loader/MultiStepLoaderDemo"

const ImageScan = ({ setImg, setText, text,setImgUrl ,imgurl }) => {
    const methods = useForm();
    const [mode, setMode] = useState(null); // 'image' or 'text'
    const [captureOrUpload, setCaptureOrUpload] = useState(null); // 'capture' or 'upload'
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [capturedFile, setCapturedFile] = useState(null);
    const [inputText, setInputText] = useState("");
    const [webcamEnabled, setWebcamEnabled] = useState(true);
    const [retake, setretake] = useState(true);
    const [hasPermission, setHasPermission] = useState(null);

    const webcamRef = useRef(null);

    // Function to capture an image
    const captureImage = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            if (imageSrc) {
                fetch(imageSrc)
                    .then(res => res.blob())
                    .then(blob => {
                        const file = new File([blob], "captured-image.jpg", { type: blob.type });
                        setCapturedImage(imageSrc);
                        setCapturedFile(file);
                        setImg(imageSrc); // Pass the captured image to the parent component
                        setWebcamEnabled(false); // Disable webcam after capture
                    });
            }
        }
    };



    // Function to handle file selection from input
    const handleImageUpload = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result);
            setImg(reader.result); // Pass the uploaded image to the parent component
        };
        reader.readAsDataURL(file);
    };
 

    // Function to retake the image
    const retakeImage = () => {
        setCapturedImage(null);
        setCapturedFile(null);
        setWebcamEnabled(true);
        setImgUrl(null)
        // Re-enable webcam for retake
    };

    // Function to handle going back
    const goBack = () => {
        setCapturedImage(null);
        setCapturedFile(null);
        setUploadedImage(null);
        setCaptureOrUpload(null);
        setWebcamEnabled(true); // Re-enable webcam if needed
        setMode(null);
        setImgUrl("")
        
    };

    return (
        <div className="p-4">
            {/* Ask the user for their choice */}
            {!mode && (
                <div className="flex px-5 h-full w-full justify-between  flex-col py-10">
                    <h2 className="text-xl font-bold mb-4">Tell me how I can solve you issue</h2>

                    <div className="flex  w-full gap-20 ">

                        <button
                            className="border-[1px] h-32 w-32 p-4 border-red-800 text-red-800 px-4  rounded-lg mb-2 flex flex-col justify-center items-center"
                            onClick={() =>{
                                setMode("image")
                                setText("")

                            } }
                        >
                            <GrScan className="h-16 w-16" />
                            Scan Image
                        </button>
                        <button
                            className="border-[1px] h-32 w-32 border-red-800 text-red-800  px-4 py-2 rounded-lg flex flex-col justify-center items-center"
                            onClick={() => {
                                setImgUrl("")

                                setMode("text")}
                            } 
                        >
                            <TiDocumentText className="h-16 w-16" />
                            Enter Text
                        </button>
                    </div>
                </div>
            )}

            {/* Image Scan Mode */}
            {mode === "image" && !captureOrUpload && (
                <div className="flex justify-center  flex-col">
                    <div className="flex justify-start w-full mt-4">
                        <button
                            className=" border-[1px]  p-4 border-red-800 text-red-800 px-4  rounded-full mb-2 flex flex-col justify-center items-center"
                            onClick={goBack}
                        >
                            <IoReturnDownBackOutline className="text-red-800 font-bold" />

                        </button>
                    </div>

                    <h2 className="text-xl font-bold mb-4">How you upload Image</h2>

                    <div className="flex  w-full gap-20 ">

                        <button
                            className="border-[1px] h-32 w-32 p-4 border-red-800 text-red-800 px-4  rounded-lg mb-2 flex flex-col justify-center items-center"
                            onClick={() => setCaptureOrUpload("capture")}
                        >
                            <CiCamera className="h-16 w-16" />
                            Camera
                        </button>
                        <button
                            className="border-[1px] h-32 w-32 p-4 border-red-800 text-red-800 px-4  rounded-lg mb-2 flex flex-col justify-around items-center"
                            onClick={() => setCaptureOrUpload("upload")}
                        >
                            <ImMobile2 className="h-16 w-16" />
                            Local

                        </button>
                    </div>
                </div>
            )}

            {/* Capture Image Mode */}
            {mode === "image" && captureOrUpload === "capture" && (
                <div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            className=" border-[1px]  p-4 border-red-800 text-red-800 px-4  rounded-full mb-2 flex flex-col justify-center items-center"
                            onClick={goBack}
                        >
                            <IoReturnDownBackOutline className="text-red-800 font-bold" />

                        </button>
                    </div>
                    <div className="">


                        <FormProvider {...methods} >
                            <ImageUploader name="image" imageFile={capturedFile} onImageUpload={handleImageUpload} setImgUrl={setImgUrl} imgurl={imgurl} loacl={false}/>
                        </FormProvider>
                    </div>

                    <div className="mt-4 ">
                        {webcamEnabled ? (
                            <div className="flex gap-4  shadow-xl p-4 items-center  flex-col">
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    className="rounded "
                                    
                                    videoConstraints={{
                                        facingMode: "environment", // Switch to "environment" for the rear camera
                                        width: 1280,
                                        height: 720
                                    }}
                                  
                                />
                                <button
                                    className="bg-red-800 text-white w-40 px-4 py-2 rounded mt-2 ml-4"
                                    onClick={captureImage}
                                >
                                    Capture
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-center">
                                {capturedImage && (
                                    <div className="mt-4">
                                        {/* <p className="text-center text-lg font-semibold">Captured Image:</p>
                                        <img src={capturedImage} alt="Captured" className="rounded shadow-lg mt-2" /> */}
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                            onClick={retakeImage}
                                        >
                                            Retake
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Upload Image Mode */}
            {mode === "image" && captureOrUpload === "upload" && (
                <div>
                    <div className="flex justify-start w-full mt-4">
                        <button
                            className=" border-[1px]  p-4 border-red-800 text-red-800 px-4  rounded-full mb-2 flex flex-col justify-center items-center"
                            onClick={goBack}
                        >
                            <IoReturnDownBackOutline className="text-red-800 font-bold" />

                        </button>
                    </div>


                    <FormProvider {...methods}>
                        <ImageUploader name="image" loacl={true} onImageUpload={handleImageUpload} setImgUrl={setImgUrl} imgurl={imgurl} />
                    </FormProvider>

                    {/* Display uploaded image if any */}
                    {uploadedImage && (
                        <div className="mt-4">
                            <p className="text-center text-lg font-semibold">Uploaded Image:</p>
                            <img src={uploadedImage} alt="Uploaded" className="rounded shadow-lg mt-2" />
                        </div>
                    )}
                </div>
            )}

            {/* Text Input Mode */}
            {mode === "text" && (
                <div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex justify-start w-full mt-4">
                            <button
                                className=" border-[1px]  p-4 border-red-800 text-red-800 px-4  rounded-full mb-2 flex flex-col justify-center items-center"
                                onClick={goBack}
                            >
                                <IoReturnDownBackOutline className="text-red-800 font-bold" />

                            </button>
                        </div>


                        {/* <button
                            className="bg-green-500 text-white px-4 py-2 rounded ml-4"
                            disabled={!inputText}
                        >
                            Submit Text
                        </button> */}
                    </div>

                    <div className="mt-4">
                        <textarea
                            className="w-full p-2 border border-red-300 rounded"
                            rows="5"
                            placeholder="Enter text to scan..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageScan;
