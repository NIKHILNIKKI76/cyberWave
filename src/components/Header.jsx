import React from 'react';
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const handleScrollToDSACompetitions = (event) => {
    event.preventDefault();
    
    // Calculate the height of your fixed header/navbar
    const headerHeight = 100; // Replace with your actual header height
    
    // Get the target element
    const dsaCompetitionsInfo = document.getElementById('dsa-competitions-info');
    
    // Calculate the scroll position, subtracting the header height
    if (dsaCompetitionsInfo) {
      const scrollPosition = dsaCompetitionsInfo.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
    
    // Close navigation if it's open
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  const handleScrollToRoadmap = (event) => {
    event.preventDefault();
    
    // Calculate the height of your fixed header/navbar
    const headerHeight = 100; // Replace with your actual header height
    
    // Get the target element
    const roadmapSection = document.getElementById('roadmap-section');
    
    // Calculate the scroll position, subtracting the header height
    if (roadmapSection) {
      const scrollPosition = roadmapSection.offsetTop - headerHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
    
    // Close navigation if it's open
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={item.id === 'certification-tiers' ? handleScrollToRoadmap : handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#dsa-competitions-info"
          onClick={handleScrollToDSACompetitions}
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          DSA COMPETITIONS
        </a>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
