"use client";

import Link from "next/link";
import React, { Component } from "react";
import Image from "next/image";

export class Logo extends Component {
  render() {
    return (
      <>
        <Link href="/">
          <div className="relative w-5 h-5 sm:w-7 sm:h-7">
            <Image
              src="/logo.svg"
              alt="ZC"
              layout="fill"
              objectFit="contain"
              className="rounded-lg transition-transform duration-300 transform hover:opacity-60"
            />
          </div>
        </Link>
      </>
    );
  }
}

export default Logo;
