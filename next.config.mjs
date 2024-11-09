/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/detb0rfij/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
