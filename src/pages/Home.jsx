import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import { Experience } from "../components/Experience/Experience";
import Container from "../components/common/Container";
import { Projects } from "../components/Projects/Projects";
import { Education } from "../components/Education/Education";
import { Skills } from "../components/Skills/Skills";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <Experience /> */}
      <section
        id="home" className="min-h-screen flex"
      >
        <Container>
          
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </Container>
      </section>

    </>
  );
};

export default Home;