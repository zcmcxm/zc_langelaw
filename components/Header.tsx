"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from ".";

export function AppHeader() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // Clean up the event listener on unmount
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`pt-5 pb-5 sticky top-0 z-50 bg-primary shadow-sm transition-transform duration-300 ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center gap-3 px-8">
        <Logo />
        <nav className="flex min-w-60 justify-between items-center text-sm sm:text-lg">
          <Link
            href="/gallery"
            className="cursor-pointer transition-transform duration-300 transform hover:opacity-60"
          >
            Gallery
          </Link>
          <Link
            href="/blogs"
            className="cursor-pointer transition-transform duration-300 transform hover:opacity-60"
          >
            Blog
          </Link>
          <Link
            href="/#About"
            className="cursor-pointer transition-transform duration-300 transform hover:opacity-60"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
