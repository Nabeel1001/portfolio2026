import { SectionHeading } from "../SectionHeading";
import { ProjectShowcase } from "./ProjectShowcase";
import aicardealership from "../../assets/images/aicardealership.png";
import chatbot from "../../assets/images/chatbot.png";
import documentprocessing from "../../assets/images/documentprocessing.png";
import { MotionWrapper } from "../../animations/MotionWrapper";
import { fadeLeft, fadeUp, staggerContainer } from "../../animations/varients";
import { motion } from "framer-motion";


export const Projects = () => {
    return (
        <section
            id="projects"
            className="px-4 md:px-6 py-12"
        >

            <div className="flex flex-col items-center justify-center mb-8">
                <MotionWrapper variants={fadeUp}>
                    <SectionHeading title="Projects" />
                </MotionWrapper>
            </div>

            <div className="flex flex-col gap-10 md:gap-20">

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
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
                        github="https://github.com/Nabeel1001/Medical_ChatBot"
                        image={chatbot}
                    />
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    <ProjectShowcase
                        reverse={true}
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
                        github="https://github.com/Nabeel1001/ai-car-receptionist"
                        image={aicardealership}
                    />
                </motion.div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                >
                    <ProjectShowcase
                        number="03"
                        title="AI Document Processing"
                        subtitle="LangChain + LangGraph + FastAPI"
                        description="An intelligent document processing system that converts unstructured documents into structured JSON using a Retrieval-Augmented Generation (RAG) pipeline. Built with LangChain, LangGraph, and FastAPI, the application extracts key information, validates outputs through AI workflows, and generates clean, machine-readable JSON for seamless integration with downstream applications."
                        technologies={[
                            "Python",
                            "LangChain",
                            "LangGraph",
                            "FastAPI",
                            "RAG",
                            "OpenAI",
                            "Pydantic",
                            "JSON",
                        ]}
                        github="https://github.com/Nabeel1001/Document-Processing"
                        image={documentprocessing}
                    />
                </motion.div>


            </div>
        </section>
    );
}
