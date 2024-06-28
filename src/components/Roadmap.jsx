import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import bronze from "../assets/goddie0.png"
import silver from "../assets/goddie1.png"
import gold from "../assets/goddie2.png"
const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="Who are we...?" />

      <div className="section-content opacity-50">
        <p>
          At <span className="company-name">CyberWave</span>, we are pioneers in blending innovation with reliability. Our journey began with a vision to redefine technological boundaries and empower businesses worldwide. With a team of passionate experts, we specialize in crafting cutting-edge solutions that propel our clients towards unparalleled success. Committed to excellence and driven by creativity, we are dedicated to shaping the future of digital transformation. Join us on this transformative journey and experience the power of innovation with <span className="company-name">CyberWave</span>.
        </p>
      </div>

      <Heading title="Why Choose Us?" className="mt-8 opacity-90" />
      <div className="section-content opacity-50">
        <p>
          At <span className="company-name">CyberWave</span>, we offer more than just an internship experience. Here's why you should choose us:
        </p>
        <ul className="list-disc ml-6">
          <li>Opportunity to work with cutting-edge technologies and solutions.</li>
          <li>Mentorship from industry experts to guide your learning and growth.</li>
          <li>A supportive and inclusive work environment that encourages creativity and innovation.</li>
          <li>Exciting goodies such as t-shirts, bottles, and more for completing tasks on time.</li>
        </ul>
      </div>

      <div className="goodies-section flex flex-col items-center mt-8">
        <Heading title="Goodies" className="mt-8 opacity-90" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="goodie-item flex flex-col items-center justify-center">
            <img src={bronze} alt="Goodie 1" className="w-full md:w-1/2 h-auto rounded-lg mb-2" />
            <p className="text-center mt-2">Bronze</p>
          </div>

          <div className="goodie-item flex flex-col items-center justify-center">
            <img src={silver} alt="Goodie 2" className="w-full md:w-1/2 h-auto rounded-lg mb-2" />
            <p className="text-center mt-2">Silver</p>
          </div>

          <div className="goodie-item flex flex-col items-center justify-center">
            <img src={gold} alt="Goodie 3" className="w-full md:w-1/2 h-auto rounded-lg mb-2" />
            <p className="text-center mt-2">Gold</p>
          </div>
        </div>

      </div>



      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20 opacity-70">
        <Button href="/roadmap">Apply Now</Button>
      </div>
    </div>
  </Section>
);



export default Roadmap;
