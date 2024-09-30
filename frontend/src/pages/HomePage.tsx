import NavBar from "../components/NavBar";
import ExploreQuizora from "../components/ExploreQuizora";
import Quotation from "../components/Quotation";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <>
      <div className="bg-black w-full min-h-screen text-white">
        <NavBar />
        <Hero />
        <Quotation />
        <ExploreQuizora />
        <ContactUs />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
