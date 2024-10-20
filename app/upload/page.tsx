'use client'
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
 
import React from 'react'

const UploadPage = () => {
    const [resource, setResource] = useState<string>("");

  return (
    <div>
        {resource &&  <CldImage src={resource} alt='Edm' width={122} height={222}></CldImage>}
 <CldUploadWidget
   uploadPreset="<Your Upload Preset>"
   onSuccess={(result) => {
     setResource(result?.info as string);
   }}
   onQueuesEnd={(result, { widget }) => {
     widget.close();
   }}
 >
   {({ open }) => {
     function handleOnClick() {
       setResource("");
       open();
     }
     return (
       <button onClick={handleOnClick}>
         Upload an Image
       </button>
     );
   }}
 </CldUploadWidget>
    </div>
  )
}

export default UploadPage