import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
  <h5 className="tagline mb-6 text-center text-n-1/50">
    EMPOWERING CODERS TO CREATE INNOVATIVE SOLUTIONS AT
  </h5>
  <ul className="flex flex-wrap gap-4 md:gap-8"> {/* Adding gap between items */}
    {companyLogos.map((logo, index) => (
      <li
        className="flex items-center justify-center flex-1 h-[8.5rem] mb-4 md:mb-0" // Adding bottom margin for space
        key={index}
      >
        <img src={logo} width={134} height={28} alt={logo} />
      </li>
    ))}
  </ul>
</div>

  );
};

export default CompanyLogos;
