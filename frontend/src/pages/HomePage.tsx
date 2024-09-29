import NavBar from "../components/NavBar";
import ExploreQuizora from "../components/ExploreQuizora";
import FAQ from "../components/FAQ";
import Quotation from "../components/Quotation";
import ContactUs from "../components/Contact";

const HomePage = () => {
  return (
    <div className="bg-black w-full min-h-screen text-white">
      <NavBar />
      <Quotation />
      <ExploreQuizora />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;
