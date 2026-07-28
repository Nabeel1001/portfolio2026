import { MotionWrapper } from "../../animations/MotionWrapper";
import { scaleIn } from "../../animations/varients";
import Container from "../common/Container";
import { Experience } from "../Experience/Experience";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="sm:mb-20 flex  pt-10 md:pt-20"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 ">
          <MotionWrapper variants={scaleIn}>
            <HeroContent />
          </MotionWrapper>
          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;