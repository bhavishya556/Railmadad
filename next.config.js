// const { tree } = require('next/dist/build/templates/app-page');

/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav:true,
    aggressiveFrontEndNavCaching:true,
    reloadOnOnline:true,
    swcMinify:true,
    // disable:true,
    workboxOptions:{
        disableDevLogs:true
    }
  });
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}

module.exports = withPWA(nextConfig);
  
