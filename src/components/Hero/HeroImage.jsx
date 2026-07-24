import profile from "../../assets/images/profile.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center lg:justify-end">

      <div className="relative">

        {/* Blue Glow */}
        <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 scale-110"></div>

        {/* Purple Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500 blur-3xl opacity-20 scale-125"></div>

        {/* Image */}
        <div className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">

          <img
            src={profile}
            alt="Nabeel Abdul Aziz Khan"
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </div>
  );
};

export default HeroImage;