import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* Centered Link to the Assessment Platform */}
        <div className="flex flex-col justify-center items-center mb-10 text-4xl font-bold text-white-800 transition-transform hover:scale-110">
  <span>Ready to test your skills?</span>
  <a
    href="https://cyberwaveassessmentplatform.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 text-blue-600 hover:text-blue-700 underline transition-colors"
  >
    Click Here to Explore Different Domains
  </a>
</div>


        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Empower your skills with CyberWave: Streamline your path to success."
        />

        <div className="flex flex-wrap gap-6 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border-4 border-gray-400 rounded-lg"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.3rem] rounded-lg">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeZQdDcHyb8d7jRe15FlOsBGS8mRr_xW8emuXPiXNfXp8ca4Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
