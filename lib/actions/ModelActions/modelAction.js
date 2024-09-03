"use server"

import axios from "axios";





export const getDepartmentByText = async (text) => {
    const payload = {
      "query": text,
      "key": "SIH_2024"
    };
    try {
      const response = await axios.post('https://railway-ts1d.onrender.com/classify', payload);
      
      // Access the data from response.data
    //   setDepartment(response.data.classification);
      console.log('API Response:', response.data.classification);

      return response.data.classification;
    } catch (error) {
        console.error('Error hitting classify API:', error);
    }
};
export const getDepartmentByImg = async (url) => {
    const payload = {
      "url": url,

    };
    try {
      const response = await axios.post('https://railway-ts1d.onrender.com/classify-image', payload);
      
      // Access the data from response.data
    //   setDepartment(response.data.classification);
      console.log('API Response:', response.data.classification);

      return response.data.classification;
    } catch (error) {
        console.error('Error hitting classify API:', error);
    }
};