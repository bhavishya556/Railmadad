import React from 'react'
import "./train.css"
const TrainLoader = () => {
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
            <div class="container w-full h-[100vh] flex justify-center items-center">
                {/* <div class="track"></div> */}
           

                <div class="train"></div>
                <p className='text-white mt-20'>RailMadad</p>
             
            </div>
        </div>
    )
}

export default TrainLoader