"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "../utils";
import { SOCIAL_MEDIA } from "../constants/social_media";

export function ConnectMedia() {
  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        role="menu"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        <ul className="flex items-center gap-5">
          {SOCIAL_MEDIA.map((item) => (
            <li key={item.id}>
              <a
                href={item.url}
                target="_blank"
                aria-label={item.title}
                title={item.title}
                className="sm:text-xl hover:opacity-60 text-primary"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </m.nav>
    </LazyMotion>
  );
}
