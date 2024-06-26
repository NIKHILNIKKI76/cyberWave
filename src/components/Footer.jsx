import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 bg-n-8 text-white">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-10 p-6">
        {/* Logo and Description */}
        <div className="container mx-auto py-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Get to Know CyberWave */}
            <div className="mb-6">
              <h5 className="text-lg font-bold mb-3">Get to Know CyberWave</h5>
              <ul>
                <li><a href="#" className="text-n-4 hover:text-n-2">About CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Careers at CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Press Releases from CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">CyberWave Science</a></li>
              </ul>
            </div>

            {/* Make Money with CyberWave */}
            <div className="mb-6">
              <h5 className="text-lg font-bold mb-3">Make Money with CyberWave</h5>
              <ul>
                <li><a href="#" className="text-n-4 hover:text-n-2">Sell on CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Sell under CyberWave Accelerator</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Protect and Build Your Brand with CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">CyberWave Global Selling</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Become an Affiliate of CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Fulfilment by CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Advertise Your Products on CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">CyberWave Pay on Merchants</a></li>
              </ul>
            </div>

            {/* Let CyberWave Help You */}
            <div className="mb-6">
              <h5 className="text-lg font-bold mb-3">Let CyberWave Help You</h5>
              <ul>
                <li><a href="#" className="text-n-4 hover:text-n-2">COVID-19 and CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Your Account on CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Returns Centre at CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">100% Purchase Protection with CyberWave</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">CyberWave App Download</a></li>
                <li><a href="#" className="text-n-4 hover:text-n-2">Help from CyberWave</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="w-full flex justify-center items-center">
          <div className="w-full sm:w-auto flex flex-col items-center">
            <h5 className="text-lg font-bold mb-3">Follow Us</h5>
            <ul className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </ul>
          </div>
        </div>


      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-10">
        <p className="caption text-n-4">
          © {new Date().getFullYear()}. All rights reserved. | Powered by <a href="https://www.company.com" className="hover:text-n-2">CyberWave</a>
        </p>
      </div>
    </Section>
  );
};


export default Footer;
