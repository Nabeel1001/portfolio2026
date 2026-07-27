import { SectionHeading } from "../SectionHeading";
import { ProjectShowcase } from "./ProjectShowcase";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6 py-24"
        >

            <div className="flex flex-col items-center justify-center">

                <SectionHeading title="Projects" />


            </div>
            <ProjectShowcase
                number="01"
                title="Medical AI Chatbot"
                subtitle="LLM • Healthcare • RAG"
                description="An intelligent healthcare assistant built with LangChain, LangGraph, Pinecone, and OpenAI. It leverages Retrieval-Augmented Generation (RAG) to deliver context-aware medical responses and provide symptom-based guidance."
                technologies={[
                    "Python",
                    "LangChain",
                    "LangGraph",
                    "OpenAI",
                    "Pinecone",
                    "AWS",
                ]}
                github="#"
                demo="#"
            />

            <ProjectShowcase
                reverse
                number="02"
                title="AI Receptionist"
                subtitle="Voice AI"
                description="A real-time voice receptionist powered by LiveKit, Whisper, ElevenLabs, and LangGraph. It manages natural conversations and intelligently routes customer interactions."
                technologies={[
                    "Python",
                    "LiveKit",
                    "Whisper",
                    "ElevenLabs",
                    "OpenAI",
                ]}
                github="#"
                demo="#"
            />

            <ProjectShowcase
                number="03"
                title="Portfolio Website"
                subtitle="React"
                description="A modern developer portfolio crafted with React and Tailwind CSS, showcasing projects, experience, and interactive UI with a clean, minimal design."
                technologies={[
                    "React",
                    "Tailwind",
                    "Framer Motion",
                ]}
                github="#"
                demo="#"
            />
        </section>
    );
};