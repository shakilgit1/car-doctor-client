import ScrollToTop from "../../hooks/scrollToTop";
import About from "./About";
import Banner from "./Banner";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Banner></Banner>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
