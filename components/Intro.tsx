import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-screen w-3/4 flex flex-col sm:flex-row justify-center items-center gap-x-14 gap-y-2">
      <div className="relative w-3/4 h-2/5 sm:w-1/2 sm:h-1/2">
        <Image
          src="/profile-photo.jpg"
          alt="Profile Photo"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div className="relative flex flex-col items-center sm:items-start sm:gap-2">
        <div>
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6">
            {/* <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              <Image
                src="/zhang-chi-chinese.jpg"
                alt="池"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div> */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-32">
              <Image
                src="/zhang-chi-eng.png"
                alt="Zhang Chi"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            {/* <div className="text-3xl sm:text-4xl font-light mb-2">张 池</div> */}
          </div>
        </div>
        <div>
          <div className="text-sm sm:text-base">
            Wondering if it&apos;s Zhang Chi or Chi Zhang? Just call me{" "}
            <b>Helen</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
