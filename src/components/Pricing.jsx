import Section from "./Section";
import iso from "../assets/certified/iso.png";
import msme from "../assets/certified/msme.png";
import startUp from "../assets/certified/startUp.png";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container mx-auto py-8 text-center ">
        <h1 className="text-3xl font-bold mb-4">Certified and Registered In</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-10">
          <div className="px-4 mt-8">
            <img
              src={msme}
              alt="Image 1"
              className="rounded-lg shadow-lg object-cover w-full h-full"
              style={{ maxWidth: '70%', height: '100%' }}
            />
          </div>
          <div className="px-4 mt-8">
            <img
              src={iso}
              alt="Image 2"
              className="rounded-lg shadow-lg object-cover w-full h-full"
              style={{ maxWidth: '70%', height: '100%' }}
            />
          </div>
          <div className="px-4 mt-8">
            <img
              src={startUp}
              alt="Image 3"
              className="rounded-lg shadow-lg object-cover w-full h-full"
              style={{ maxWidth: '100%', height: '100%' }}
            />
          </div>
        </div>


      </div>


    </Section>
  );
};

export default Pricing;
