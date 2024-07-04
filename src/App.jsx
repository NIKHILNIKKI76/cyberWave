import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import CertificateDetails from "./components/certificatDetails";
import DSACompetitionsInfo from "./components/DSACompetitionsInfo";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <DSACompetitionsInfo/>
        <Services />
        {/* <Pricing />  */}

        <Roadmap />
        <CertificateDetails/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
