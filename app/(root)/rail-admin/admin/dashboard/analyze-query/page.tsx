import React from 'react';
import Chart1 from "@/components/AdminPanel/chart/Char1";
import { depCount } from "@/lib/actions/MainQueryEntry/MainQueryEntry";

async function getData() {
  try {
    let res = await depCount();


    if (res) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {

    return []; // Return an empty array in case of error
  }
}

export default async function Page() {
  let data = [];

  try {
    data = await getData();

  } catch (error) {
    console.error("Error in Page component:", error);
  }

  return (
    <div className='p-4'>
      <Chart1 counts={data?.counts} total={data?.total} />
    </div>
  );
}
