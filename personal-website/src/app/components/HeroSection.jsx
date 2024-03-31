import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Iqyan</h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, in.</p>
        </div>
        <div className="col-span-5">
          <div className="rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] relative">
            <Image src="/images/hero-image.png" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="hero image" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
