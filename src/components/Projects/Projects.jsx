import { SectionHeading } from "../SectionHeading";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section
            id="experience"
            className="py-20 pt-8 px-2"
        >
            <SectionHeading title="Projects" />

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
                <div className="lg:col-span-2">
                    <ProjectCard
                        featured
                        title="Medical AI Chatbot"
                        category="Featured"
                        description="AI-powered medical assistant using LangChain, LangGraph, Pinecone, OpenAI, and AWS."
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
                </div>

                <ProjectCard
                    title="AI Receptionist"
                    category="Voice AI"
                    description="Voice-enabled AI receptionist with LiveKit, Whisper, ElevenLabs, and LangGraph."
                    technologies={[
                        "Python",
                        "LiveKit",
                        "Whisper",
                        "ElevenLabs",
                    ]}
                    github="#"
                    demo="#"
                />

                <ProjectCard
                    title="Portfolio Website"
                    category="Frontend"
                    description="Modern React portfolio built with Tailwind CSS featuring smooth animations and a premium UI."
                    technologies={[
                        "React",
                        "Tailwind",
                        "Framer Motion",
                    ]}
                    github="#"
                    demo="#"
                />
            </div>
        </section>
    );
};