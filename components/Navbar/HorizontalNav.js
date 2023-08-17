'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/horizontalNav.module.css';
import {
  BsFillBellFill,
  BsPersonCircle,
  BsFillGridFill,
  BsFillFileExcelFill,
} from 'react-icons/bs';
import MobileNav from './mobileNav';
import AccountCard from '../NavCards/AccountCard/AccountCard';
import NotificationCard
    from '../NavCards/NotificationCard/Notification';
const HorizontalNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAccountCardOpen, setIsAccountCardOpen] = useState(false);
  const [isNotificationCardOpen, setIsNotificationCardOpen] = useState(false);

  const handleMobileNavOpen = () => {
    setIsMobileNavOpen(true);
  };

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false);
  };

  const handleAccountCardToggle = () => {
    setIsAccountCardOpen(!isAccountCardOpen);
  };
  const handleNotificationCardToggle = () => {
    setIsNotificationCardOpen(!isNotificationCardOpen);
  };

  const wrapperRef = useRef(null); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsAccountCardOpen(false);
        setIsNotificationCardOpen(false);
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={`${styles.horizontal_main} relative`} ref={wrapperRef}>
      <div className={styles.horizontal_user}>
        <h2 className='sm:text-xl md:text-2xl'>Haldia Institute of Technology</h2>
      </div>
      <div className="absolute top-0 left-0 md:hidden">
        {isMobileNavOpen && <MobileNav />}
      </div>
      <div className={styles.user_profile}>
              <BsFillBellFill className=" cursor-pointer hover:text-white"
              onClick={handleNotificationCardToggle}

              />
        <BsPersonCircle
          className="cursor-pointer hover:text-white"
          onClick={handleAccountCardToggle}
        />
      </div>
      <div className={`${styles.hamburger}`}>
        <button
          className={`${styles.hamburger_menu} ${
            isMobileNavOpen ? styles.hamburger_close : ''
          }`}
          onClick={handleMobileNavOpen}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`${styles.hamburger_menu} ${
            isMobileNavOpen ? '' : styles.hamburger_close
          } `}
          onClick={handleMobileNavClose}
        >
          <BsFillFileExcelFill />
        </button>
      </div>
      {isAccountCardOpen && (
        <div className='absolute top-14 right-16'>
          <AccountCard onSignInClick={handleAccountCardToggle} />
        </div>
      )}
      {isNotificationCardOpen && (
        <div className='absolute top-14 right-16'>
          <NotificationCard />
        </div>
      )}
    </div>
  );
};

export default HorizontalNav;
