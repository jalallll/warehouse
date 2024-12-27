"use client"; // Add this at the top of the file

import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        router.push("/salesRep");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                {/* Username Field */}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        placeholder="Enter your username"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                {/* Role Selection */}
                <div className="mb-6">
                    <label
                        htmlFor="role"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        required
                    >
                        <option value="">Select your role</option>
                        <option value="Warehouse Worker">
                            Warehouse Worker
                        </option>
                        <option value="Sales Rep">Sales Rep</option>
                    </select>
                </div>

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
