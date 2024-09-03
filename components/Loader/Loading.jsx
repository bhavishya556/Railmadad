
"use client";

import { Button, Spinner } from "flowbite-react";

import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-row gap-3 fixed z-50 w-full h-screen justify-center items-center ">

      <Button color="red" className="">
        <Spinner aria-label="Alternate spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  )
}

export default Loading
