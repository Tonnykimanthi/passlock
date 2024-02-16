import Image from "next/image";
import heroImage from "../../public/hero-image.svg";
import LoginButton from "../ui/LoginButton";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-x-4 bg-secondary px-2 py-2 max-md:py-5 sm:px-5 md:flex-row md:justify-between md:px-8">
      <div className="max-w-sm max-md:text-center md:max-w-xl">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Take Control of Your <span className="text-accent">Passwords</span>{" "}
          with <span className="text-primary">Passlock</span> Manager
        </h1>
        <p className="mt-2">
          With Passlock Manager, you can effortlessly store, organize, and
          access all your login information in one secure place.
        </p>
        <div className="group relative mt-2 w-fit rounded bg-primary max-md:mx-auto">
          <LoginButton
            title="Get Started"
            styles="w-40 py-2.5 text-white transition"
          />
        </div>
      </div>
      <div>
        <Image src={heroImage} alt="Hero section image" priority />
      </div>
    </section>
  );
};

export default HeroSection;
