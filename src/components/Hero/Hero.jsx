import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section 
      className="hero min-h-[70vh] bg-base-200 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold text-white">
            Movie Explorer
          </h1>
          <p className="mb-5 text-gray-200">
            Discover your next favorite movie, explore trending collections, and dive into an amazing world of cinematic experiences.
          </p>
          <Link to="/movies" className="btn btn-primary">
            Explore Movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;