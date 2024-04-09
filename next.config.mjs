/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname:"media.beehiv.com",
            },
            {
                hostname: 'img.clerk.com',
            }
        ]
    }
};

export default nextConfig;
