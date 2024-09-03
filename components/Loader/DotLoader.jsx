import React from 'react'

const DotLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
    <div className="w-full gap-x-2 flex justify-center items-center">
        <div
            className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"
        ></div>
        <div
            className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"
        ></div>
        <div
            className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
        ></div>
    </div> {/* Add your loader here */}
</div>
  )
}

export default DotLoader