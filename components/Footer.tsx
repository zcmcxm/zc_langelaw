"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { ConnectMedia, ScrollToTop } from "../components";

export function AppFooter() {
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="w-full py-10 relative before:absolute before:top-0 before:left-2 before:w-[calc(100%-16px)] before:h-[1px] before:bg-gray-100"
    >
      <div className="container-md flex flex-col md:flex-row justify-between items-center gap-10 sm:gap-3 mx-4">
        <p className="font-light text-xs sm:text-sm text-primary">
          Copyright &copy; {year} Zhang Chi
        </p>
        {/* <ScrollToTop /> */}
        <ConnectMedia />
      </div>
    </footer>
  );
}
