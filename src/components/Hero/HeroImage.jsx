import profile from "../../assets/images/profile.png";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const HeroImage = () => {
    return (
        <div className="flex justify-center lg:justify-end pt-2">

            <div className="relative">

                {/* Blue Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 scale-50"></div>

                {/* Purple Glow */}
                <div className="absolute inset-0 rounded-full bg-violet-500 blur-3xl opacity-20 scale-100"></div>

                {/* Image */}
                <div className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-3xl overflow-hidden  shadow-2xl ">

                    <img
                        src={profile}
                        alt="Nabeel Abdul Aziz Khan"
                        className="w-full aspect-auto object-cover"
                    />

                </div>
                <div className="mt-6 flex justify-center gap-5">
                    {/* GitHub */}
                    <a
                        href="https://github.com/Nabeel1001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gray-100 backdrop-blur-lg border border-gray-300 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-900 shadow-xs"
                    >
                        <FaGithub className="text-2xl text-black group-hover:text-gray-300" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/nabeelkhantechsavvy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gray-100 backdrop-blur-lg border border-gray-300 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#0077B5] shadow-xs"
                    >
                        <FaLinkedin className="text-2xl text-[#0A66C2] group-hover:text-white" />
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/profile.php?id=100057804951401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gray-100 backdrop-blur-lg border border-gray-300 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] shadow-xs"
                    >
                        <FaFacebook className="text-2xl text-[#1877F2] group-hover:text-white" />
                    </a>
                </div>

            </div>

        </div>
    );
};

export default HeroImage;