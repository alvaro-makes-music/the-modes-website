"use client"
// import { useEffect } from 'react';
import styles from '@/app/styles/BackgroundImage.module.css';

export default function BackgroundImage() {
  // useEffect(() => {
  //   const handleScroll = () => {
  // //     // Calculate the scroll percentage
  //     // const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

  // //     // Log scroll percentage to see if it’s updating
  // //     // console.log("Scroll Percentage:", scrollPercentage);

  // //     // Update the CSS variable to shift the background horizontally
  //     document.documentElement.style.setProperty('--bg-pos', `${scrollPercentage * 100}%`);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div className={styles.backgroundImage}></div>
  );
}