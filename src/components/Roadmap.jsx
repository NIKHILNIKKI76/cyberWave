import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import bronze from "../assets/goodie0.png"
import silver from "../assets/goodie1.png"
import gold from "../assets/goodie2.png"

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      
      <div className="goodies-section flex flex-col items-center mt-8">
        <Heading title="Certification Tiers and Goodies" className="mt-4 opacity-90" /> {/* Adjusted margin top */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 "> {/* Further adjusted margin top */}
          <div className="goodie-item flex flex-col items-center justify-center">
            <img src={bronze} alt="Goodie 1" className="w-full md:w-1/2 h-auto rounded-lg mb-2" />
          </div>

          <div className="goodie-item flex flex-col items-center justify-center">
            <img src={silver} alt="Goodie 2" className="w-full md:w-1/2 h-auto rounded-lg mb-2" />
          </div>

          <div className="goodie-item flex flex-col items-center justify-center">
            <img src={gold} alt="Goodie 3" className="w-full md:w-1/2 h-auto rounded-lg mb-2" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 opacity-70">
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeZQdDcHyb8d7jRe15FlOsBGS8mRr_xW8emuXPiXNfXp8ca4Q/viewform">Apply Now</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
