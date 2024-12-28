"use client"; // Add this at the top of the file

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../utils/supabase/client";
import { signupAdmin } from "./actions";

export default function Signup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        await signupAdmin(formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
            <form
                className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

                {/* Company Name Field */}
                {/* <div className="mb-4">
                    <label
                        htmlFor="companyName"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        placeholder="Enter your company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div> */}

                {/* First Name Field */}
                {/* <div className="mb-4">
                    <label
                        htmlFor="firstName"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div> */}

                {/* Last Name Field */}
                {/* <div className="mb-4">
                    <label
                        htmlFor="lastName"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 text-black"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div> */}

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
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-6">
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
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Signup Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
