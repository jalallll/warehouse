"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
    handleViewInboundOrders,
    handleViewInventory,
    handleViewOutboundOrders,
} from "./helpers";
import { logout } from "../logout/actions";

export default function SalesRep() {
    console.log(process.env.NEXT_PUBLIC_SERVER_PUBLIC_URL);
    const router = useRouter();

    const handleCreateOrder = (type: string) => {
        router.push(`/createOrder?type=${type}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-6 text-center text-black">
                Sales Representative
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md md:max-w-2xl w-full">
                {/* Inbound Orders Section */}
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-4 text-black">
                        Inbound Orders
                    </h2>
                    <button
                        className="bg-blue-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 w-full"
                        onClick={() => handleCreateOrder("inbound")}
                    >
                        Create Order
                    </button>
                    <button
                        className="bg-blue-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 w-full"
                        onClick={logout}
                    >
                        logout
                    </button>
                    <button
                        className="mt-4 bg-blue-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 w-full"
                        onClick={handleViewInboundOrders}
                    >
                        View Orders
                    </button>
                </div>

                {/* View Inventory Section */}
                <div className="flex flex-col items-center justify-center">
                    <button
                        className="bg-green-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-green-600 focus:ring focus:ring-green-300 w-full"
                        onClick={handleViewInventory}
                    >
                        View Inventory
                    </button>
                </div>

                {/* Outbound Orders Section */}
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-4 text-black">
                        Outbound Orders
                    </h2>
                    <button
                        className="bg-blue-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 w-full"
                        onClick={() => handleCreateOrder("outbound")}
                    >
                        Create Order
                    </button>
                    <button
                        className="mt-4 bg-blue-500 text-black font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-300 w-full"
                        onClick={handleViewOutboundOrders}
                    >
                        View Orders
                    </button>
                </div>
            </div>
        </div>
    );
}
