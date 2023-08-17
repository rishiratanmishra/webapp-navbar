import Link from 'next/link';
import React from 'react';
import styles from '../../styles/mobilenav.module.css'
import {
  BsFillHouseFill,
  BsFillChatRightFill,
  BsFillClipboardPlusFill,
} from 'react-icons/bs';

const MobileNav = ({ marginTop }) => {
  return (
    <div
      className={` ${styles.background_color} h-screen w-40 flex flex-col  md:hidden lg:hidden`}
    >
      <div className="text-center mt-10">
        <h2>LOGO</h2>
      </div>
      <div className="flex flex-col mt-10">
        <ul className="flex flex-col gap-4 ">
          <div className="flex items-center ml-3 gap-2">
            <BsFillHouseFill />
            <Link href="/">Dashboard</Link>
          </div>

          <div className="flex items-center ml-3 gap-2">
            <BsFillChatRightFill />
            <Link href="/">Chat</Link>
          </div>

          <div className="flex items-center ml-3 gap-2">
            <BsFillClipboardPlusFill />
            <Link href="/">Notify</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
