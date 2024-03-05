import Navbar from "../layouts/Navbar";
import Team from "../components/Team";
import Container from "../layouts/Container";
import Tokenomics from "../components/Tokenomics";
import Performance from "../components/Performance";
import About from "../components/About";
import Sidebar from "../components/Sidebar";
import Sentiment from "../components/Sentiment";
import SubHeader from "../components/SubNavbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BreadCrumbs from "../components/BreadCrumbs";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <BreadCrumbs />
        <Hero />
        <SubHeader />
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </Container>
      <Footer />
      <Sidebar />
    </>
  );
};

export default LandingPage;
