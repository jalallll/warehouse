import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_SERVER_PUBLIC_URL: "http://192.168.2.14:3000",
    },
};

export default nextConfig;
