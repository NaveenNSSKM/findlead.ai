/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: {
        buildActivity: false,
        appIsrStatus: false,
    },

    // Image Optimization - Critical for mobile LCP
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 year
    },

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },

    // SWC minification for smaller bundles
    swcMinify: true,

    // Enable compression
    compress: true,

    // Disable source maps in production
    productionBrowserSourceMaps: false,

    // Experimental optimizations
    experimental: {
        optimizePackageImports: ['react', 'react-dom'],
        optimizeCss: true,
    },

    // Turbopack configuration (empty = use defaults)
    // Turbopack automatically handles code splitting and optimization
    turbopack: {},


    // Caching headers for static assets
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
