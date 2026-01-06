/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        buildActivity: false,
        appIsrStatus: false,
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    swcMinify: true,
};

export default nextConfig;
