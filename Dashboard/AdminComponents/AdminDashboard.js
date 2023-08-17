import React from 'react';
import Link from 'next/link';
import { FaUserTie, FaUserGraduate, FaHouseUser, FaPlus } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <>
      <div>
        <h3 className=""> Dashboard</h3>
      </div>

      <div className="grid lg:grid-cols-3 grid-rows-1 mt-5 gap-4 justify-center items-center">
        <div className=" relative flex items-center ml-3 gap-8 border-2 hover:border-cyan-500 border-gray-500 rounded-lg p-5">
          <FaUserTie className="text-4xl text-green-300" />
          <span className="cursor-pointer hover:text-white  ">
            Total Teachers :
          </span>
          <div className="">80</div>
          <Link href="/">
          <div className="absolute right-0 bottom-0  p-2.5 h-full border-2 border-slate-500 hover:border-cyan-500 rounded-lg flex justify-center items-center text-black bg-yellow-500 hover:bg-black hover:text-cyan-500">
            <FaPlus className=' hover:text-cyan-500 ' />
            </div>
            </Link>
        </div>
        <div className=" relative flex items-center ml-3 gap-8 border-2 hover:border-cyan-500 border-gray-500 rounded-lg p-5">
          <FaUserGraduate className="text-4xl text-green-300" />
          <span className="cursor-pointer hover:text-white  ">
            Total Students :
          </span>
          <div className="">380</div>
          <Link href="/">
          <div className="absolute right-0 bottom-0  p-2.5 h-full border-2 border-slate-500 hover:border-cyan-500 rounded-lg flex justify-center items-center text-black bg-yellow-500 hover:bg-black hover:text-cyan-500">
          <FaPlus className=' hover:text-cyan-500 ' />
            </div>
            </Link>
        </div>
        <div className=" relative flex items-center ml-3 gap-8 border-2 hover:border-cyan-500 border-gray-500 rounded-lg p-5">
          <FaHouseUser className="text-4xl text-green-300" />
          <span className="cursor-pointer hover:text-white  ">
            Total Parents :
          </span>
          <div className="">280</div>
          <Link href="/">
          <div className="absolute right-0 bottom-0  p-2.5 h-full border-2 border-slate-500 hover:border-cyan-500 rounded-lg flex justify-center items-center text-black bg-yellow-500 hover:bg-black hover:text-cyan-500">
            <FaPlus className=' hover:text-cyan-500 ' />
            </div>
            </Link>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
