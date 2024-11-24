import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-[90vh] w-3/4 flex flex-col justify-center items-center gap-x-14 gap-y-12 sm:gap-y-16">
      <div className="animate-drop-fast relative w-5/6 h-1/4 sm:w-5/12 sm:h-1/2">
        <Image
          src="/site-logo.png"
          alt="Site Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative flex flex-col items-center sm:items-start mx-4">
        {/* <div>
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src="/zhang-chi-chinese.jpg"
                alt="池"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="relative w-28 h-28 sm:w-36 sm:h-32">
              <Image
                src="/zhang-chi-eng.png"
                alt="Zhang Chi"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="text-3xl sm:text-4xl font-light mb-2">张 池</div>
          </div>
        </div> */}
        <div className="animate-drop-slow">
          <div className="text-sm sm:text-xl">
            Wondering if it&apos;s Zhang Chi or Chi Zhang? Just call me{" "}
            <b>Helen</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
