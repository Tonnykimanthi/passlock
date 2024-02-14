import Image from "next/image";
import heroImage from "../../public/hero-image.svg";

const HeroSection = () => {
  return (
    <div className="max-md:mt-5 flex flex-col items-center gap-x-4 md:flex-row">
      <h1 className="max-w-sm text-center text-4xl font-semibold">
        Take Control of Your{" "}
        <span className="bg-gradient-to-tr from-accent/50 to-accent bg-clip-text text-transparent">
          Passwords
        </span>{" "}
        with{" "}
        <span className="bg-gradient-to-tr from-primary to-primary/60 bg-clip-text italic text-transparent">
          Passlock
        </span>{" "}
        Manager
      </h1>
      <div className="">
        <Image src={heroImage} alt="Hero section image" />
      </div>
    </div>
  );
};

export default HeroSection;
