import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="About"
      className="h-screen w-3/4 flex flex-col sm:flex-row justify-center items-center gap-x-14 gap-y-2"
    >
      <div className="relative">
        <div className="flex flex-row sm:flex-col justify-center items-start gap-2 sm:gap-0">
          {/* <div className="relative w-24 h-24 sm:w-48 sm:h-36">
            <Image
              src="/about-me-chinese.jpg"
              alt="关于我"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div> */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-16">
            <Image
              src="/about-me-eng.png"
              alt="About Me"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          {/* <div className="text-3xl sm:text-4xl font-light mb-2">张 池</div> */}
        </div>
      </div>
      <div className="relative flex flex-col items-start sm:gap-2">
        <div>
          <div className="text-sm sm:text-base">
            Welcome to my corner of the internet! This is where I share my
            passions, creative works, and personal discoveries.
            <br />
            <br />
            In my{" "}
            <Link
              href="/blog"
              className="cursor-pointer transition-transform duration-300 transform text-primary hover:opacity-60"
            >
              Blog
            </Link>{" "}
            , I invite you to explore my thoughts and experiences, while the{" "}
            <Link
              href="/gallery"
              className="cursor-pointer transition-transform duration-300 transform text-primary hover:opacity-60"
            >
              Gallery
            </Link>{" "}
            showcases a collection of my artwork, from Chinese calligraphy to
            other creative expressions.
            <br />
            <br />
            I&apos;m Zhang Chi (Helen), from{" "}
            <a
              href="https://www.google.com/search?q=chongqing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:opacity-60"
            >
              Chongqing
            </a>
            , China. YES, I&apos;m a fan of SPICY food! When I&apos;m not
            indulging in my love for Chinese calligraphy, you can find me diving
            into the deep blue, practicing taekwondo, or cycling through new
            adventures. :) Welcome to my site! Here is where I share my ideas,
            calligraphy, and exploration.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
