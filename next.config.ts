import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_SERVER_PUBLIC_URL:
            process.env.NEXT_PUBLIC_SERVER_PUBLIC_URL,
        NEXT_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
};

export default nextConfig;
