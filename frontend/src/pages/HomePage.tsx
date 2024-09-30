import NavBar from "../components/NavBar";
import ExploreQuizora from "../components/ExploreQuizora";
import FAQ from "./FAQ";
import Quotation from "../components/Quotation";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="bg-black w-full min-h-screen text-white">
      <NavBar />
      <Hero />
      <Quotation />
      <ExploreQuizora />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;
