import { Metadata } from "next";

const author = "Zhang Chi";
const description = "";
const url = "";
export const AppMetadata: Metadata = {
  metadataBase: new URL("https://zcmcxm.github.io/zc.langelaw/"),
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`,
  },
  description: description,
  icons: {
    icon: "/favicon.png",
  },
  keywords: [`${author}`, "Portfolio website"],
  creator: author,
  authors: [{ name: author, url: url }],
  colorScheme: "dark",
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      //   {
      //     url: "https://vasile-novatchii.netlify.app/screenshot.webp",
      //     width: 800,
      //     height: 600,
      //     alt: "My personal portfolio website",
      //   },
      //   {
      //     url: "https://vasile-novatchii.netlify.app/screenshot.webp",
      //     width: 1800,
      //     height: 1600,
      //     alt: "My personal portfolio website",
      //   },
    ],
    locale: "en-US",
    type: "website",
  },
};
