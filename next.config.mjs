/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
        '10.0.0.183',     // your PC's Wi-Fi IPv4 (from ipconfig)
        // add more (e.g., another laptop) as plain hosts, no http:// and no :3000
    ],
};

export default nextConfig;
