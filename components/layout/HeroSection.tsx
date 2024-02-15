import Image from "next/image";
import heroImage from "../../public/hero-image.svg";
import LoginButton from "../ui/LoginButton";
import { HiChevronRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-x-4 bg-secondary px-2 max-md:pt-5 sm:px-5 md:flex-row md:justify-between md:px-8">
      <div className="max-w-sm max-md:text-center md:max-w-xl">
        <h1 className="text-2xl font-semibold md:text-4xl">
          Take Control of Your <span className="text-accent/80">Passwords</span>{" "}
          with <span className="text-primary/80">Passlock</span> Manager
        </h1>
        <p className="mt-2">
          With Passlock Manager, you can effortlessly store, organize, and
          access all your login information in one secure place.
        </p>
        <button className="relative mt-2 w-48 bg-primary rounded group">
          <LoginButton
            title="Get Started"
            styles="w-full py-2 text-white transition"
          />
          <HiChevronRight className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 stroke-1 text-white transition-all group-hover:right-2" />
        </button>
      </div>
      <div>
        <Image src={heroImage} alt="Hero section image" />
      </div>
    </section>
  );
};

export default HeroSection;
