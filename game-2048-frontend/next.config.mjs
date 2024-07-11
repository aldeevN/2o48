/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["localhost"]
    },
    reactStrictMode: true,
    env: {
        BACKEND_API_KEY: process.env.BACKEND_API_KEY,
    }
}
export default nextConfig
