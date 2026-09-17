import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
    document.title = "Movie Explorer | Home";
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;