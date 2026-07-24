import Container from "../common/Container";
import { Experience } from "../Experience/Experience";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex  pt-20"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 ">
          <HeroContent />
          <HeroImage />
        </div>
        <Experience />
      </Container>
    </section>
  );
};

export default Hero;