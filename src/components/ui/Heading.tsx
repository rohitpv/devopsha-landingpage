"use client";
import { SparklesCore } from "./sparkles";

export default function SparklesPreview() {
  return (
    <div className="h-[50rem] w-full bg-black flex flex-col items-center justify-start overflow-hidden rounded-md py-12">
      {/* Header Section */}
      <div className="flex flex-col w-full items-center gap-6 mb-4">
        {/* image */}
        <div className="flex items-center justify-center bg-black">
          <img
            src="../../../assets/images/devopsha_logo_new.jpeg"
            alt="Logo"
            className="w-[100px] h-[100px] object-cover rounded-lg shadow-lg bg-black"
          />
        </div>

        <h2 className="md:text-3xl text-1xl lg:text-4xl text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent z-20">
          We are Launching Soon!
        </h2>

        {/* heading with text effect */}
        <div className="relative h-[8rem] w-full flex items-center justify-center">
          <div className="text-container w-full flex items-center justify-center">
            <div className="text-outline">DEVOPSHA</div>
            <div className="text-filled">DEVOPSHA</div>
          </div>
        </div>
      </div>

      {/* sparkles section - now directly below heading */}
      <div className="w-[150rem] h-40 relative mt-0">
        {/* Gradients */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[85%] h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[75%] h-[5px] bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[75%] h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-6 mt-4">
        <h3 className="text-blue-500 md:text-1xl text-1xl lg:text-2xl text-center z-20">
          Level up your DevOps skills like never before
        </h3>

        <h3 className="text-cyan-200 md:text-1xl text-1xl lg:text-2xl text-center z-20 max-w-3xl">
          Master DevOps with hands-on labs, real-world projects, and expert-led content. <br />
          Stay tuned for the revolution in DevOps education
        </h3>
      </div>
    </div>
  );
}
