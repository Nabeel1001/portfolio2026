import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import { Experience } from "../components/Experience/Experience";
import Container from "../components/common/Container";
import { Projects } from "../components/Projects/Projects";
import { Education } from "../components/Education/Education";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { NewSkills } from "../components/NewSkills.jsx";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <Experience /> */}
      <section
        id="home"
        className="min-h-screen flex flex-col"
      >
        <Container>
          <Experience />
          <Projects />
          <Education />
          {/* <Skills /> */}
          <NewSkills />
          <Contact />
          <Footer />
        </Container>
      </section>

    </>
  );
};

export default Home;