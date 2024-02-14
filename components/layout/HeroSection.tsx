import Image from "next/image";
import heroImage from "../../public/hero-image.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-x-4 max-md:mt-5 md:flex-row md:justify-between">
      <div className="max-w-sm max-md:text-center md:max-w-xl">
        <h1 className="text-4xl font-semibold">
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
        <p className="mt-2">
          With Passlock Manager, you can effortlessly store, organize, and
          access all your login information in one secure place.
        </p>
      </div>
      <div className="">
        <Image src={heroImage} alt="Hero section image" />
      </div>
    </section>
  );
};

export default HeroSection;
