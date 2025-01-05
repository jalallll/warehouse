import { loginAdmin, signup } from "./actions";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
            <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                {/* Email Field */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        placeholder="Enter your email"
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

                {/* Login Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    formAction={loginAdmin}
                >
                    Login
                </button>

                {/* Signup Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    formAction={signup}
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}
