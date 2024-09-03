"use client";
import React, { useState, useRef } from 'react';
import { apiConnector, BASE_URL, ImagesRoutes_API } from '@/lib/services/apis';
import { Poppins } from 'next/font/google';
import { Input } from "@/components/ui/input";
import { useFormContext } from 'react-hook-form';
import DotLoader from "@/components/Loader/DotLoader";
import TrainLoader from "@/components/Loader/TrainLoader";

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const ImageUploader = ({ name, imageFile, setImg,imgurl, setImgUrl,loacl }: { name: string, imageFile?: File, setImg: any ,setImgUrl:any,imgurl:string,loacl:boolean}) => {
    const { setValue } = useFormContext();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    

    // Function to handle file selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files: FileList = e.target.files;
            uploadImages(Array.from(files));
        }
    };

    // Function to upload images
    const uploadImages = async (images: File[]) => {
        setIsLoading(true); // Show loader
        try {
            const formData = new FormData();
            images.forEach((image) => {
                formData.append('images', image);
            });

            const response = await apiConnector({
                method: "POST",
                url: `${BASE_URL}${ImagesRoutes_API.uploadImages}`,
                bodyData: formData,
            });
            setValue(name, response?.data?.data?.urls[0]);
            // console.log(response?.data?.data?.urls[0])
            setImgUrl(response?.data?.data?.urls[0])
            setImg(response?.data?.data?.urls[0])
        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false); // Hide loader
        }
    };

    React.useEffect(() => {
        if (imageFile) {
            uploadImages([imageFile]);
        }
    }, [imageFile]);

    return (
        <div className=''>
            {isLoading && (
                <TrainLoader />
            )}
            {loacl && 
            (     <Input className="focus:border-purple-500 tracking-wide"
                accept='image/*'
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                multiple
                placeholder="Upload"
            />) }
       
            {
                imgurl && (
                    <div className="mt-4 w-full flex flex-col justify-center items-center">
                        <p className="text-center text-lg font-semibold">Uploaded v Image:</p>
                        <img src={imgurl} alt="Uploaded" className="rounded shadow-lg mt-2 h-60" />
                    </div>
                )
            }

        </div>
    );
};

export default ImageUploader;
