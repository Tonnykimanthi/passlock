import Image from "next/image";
import heroImage from "../../public/hero-image.svg";
import LoginButton from "../ui/LoginButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-x-4 bg-secondary px-2 py-2 max-md:py-5 sm:px-5 md:flex-row md:justify-between md:px-8">
      <div className="max-w-sm max-md:text-center md:max-w-xl">
        <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Take Control of Your <span className="text-accent">Passwords</span>{" "}
          with <span className="text-primary">Passlock</span> Manager
        </h1>
        <p className="mt-2">
          With Passlock Manager, you can effortlessly store, organize, and
          access all your login information in one secure place.
        </p>
        <LoginButton
          title="Get started"
          styles="w-40 mt-2 rounded py-2.5 text-white bg-primary hover:bg-primaryDark transition"
        />
      </div>
      <div>
        <Image src={heroImage} alt="Hero section image" priority />
      </div>
    </section>
  );
};

export default HeroSection;
