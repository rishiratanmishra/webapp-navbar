import Link from 'next/link';
import React from 'react';
import styles from '../../styles/mobilenav.module.css'

import {
  BsFillHouseFill,
  BsFillChatRightFill,
  BsFillClipboardPlusFill,
} from 'react-icons/bs';

const SideNav = () => {
  return (
    <div className={`  ${styles.background_color} z-1 absolute h-full w-40 flex flex-col`}>
    <div className=" text-center mt-10">
        <h2 className='cursor-pointer hover:text-white'>PIGEON LMS</h2>
      </div>
      <div className="flex flex-col mt-10">
        <ul className="flex flex-col gap-4 ">
          <div className="flex items-center ml-3 gap-2">
            <BsFillHouseFill />
            <Link href="/" className='cursor-pointer hover:text-white '>Dashboard</Link>
          </div>

          <div className="flex items-center ml-3 gap-2">
            <BsFillChatRightFill />
            <Link href="/about" className='cursor-pointer hover:text-white '>Chat</Link>
          </div>

          <div className="flex items-center ml-3 gap-2">
            <BsFillClipboardPlusFill />
            <Link href="/" className='cursor-pointer hover:text-white  ' >Notify</Link>
                  </div>
                  
         
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
