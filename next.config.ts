import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_SERVER_PUBLIC_URL:
            "https://warehouseapi-production.up.railway.app",
    },
};

export default nextConfig;
