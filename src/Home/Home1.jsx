import React, { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import Card from './Card/Card.jsx';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import Footer from '../Footer/Footer.jsx';



function Home1() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container>
      <div className=" homeTopBg w-full h-screen relative" data-scroll data-scroll-speed={0}>
        <div className='relative'>
          <h1 className=' absolute top-0 left-[32%] font-bold text-6xl text-center'><span className='text-amber-400'>WELCOME</span>
            <br />
            TO <span className='text-amber-400'>CAT</span> WORLD</h1>
        </div>
      </div>
      <div className='h-screen w-screen flex items-center' id='main0' data-scroll data-scroll-speed={4}>
        <div className='flex justify-center text-5xl text-center font-bold gap-1 px-40 leading-snug' >
          Let me tall you <br /> something about <br /> CAT
        </div>
      </div>
      <div  className='h-auto max-h-20'>
        <Card />
      </div>
      


    </div>
  )
}

export default Home1