"use client"
import React, { useState } from 'react'
import { useRef } from 'react';
import { apiConnector, BASE_URL, ImagesRoutes_API } from '@/lib/services/apis';
import { Poppins } from 'next/font/google'
import { Input } from "@/components/ui/input"
import DotLoader from "@/components/Loader/DotLoader"

import { useFormContext } from 'react-hook-form';

const poppins = Poppins({
    weight: ['400', '500', '900', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const ProfileImageUpload = ({ name }: { name: string }) => {
    // 
    const { control, setValue } = useFormContext();
    const [isLoading, setIsLoading] = useState(false);
    // 

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);

    // Function to handle file selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files: FileList = e.target.files;
            setSelectedImages(prevImages => [...prevImages, ...Array.from(files)]);
            uploadImages(Array.from(files));
        }
    };

    // Function to upload images
    const uploadImages = async (images: File[]) => {
        try {
            setIsLoading(true);
            const formData = new FormData();
            images.forEach((image) => {
                formData.append('images', image);
            });

            const response = await apiConnector({
                method: "POST",
                url: `${BASE_URL}${ImagesRoutes_API.uploadImages}`,
                bodyData: formData,
            });
          
            // 
            setValue(name, response?.data?.data?.urls[0]);
            // 
            setSelectedImages([]);
        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false); // Hide loader
        }

    };

    return (
        <div>
            {isLoading && (
               <DotLoader/>
            )}
            <Input className="focus:border-red-500 tracking-wide"
                accept='image/*'
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                multiple
                placeholder="Upload"
            />
        </div>
    )
}

export default ProfileImageUpload;