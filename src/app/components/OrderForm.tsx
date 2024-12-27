"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface OrderFormProps {
    orderType: string;
}

export default function OrderForm({ orderType }: OrderFormProps) {
    const url = `${process.env.NEXT_PUBLIC_SERVER_PUBLIC_URL}/${orderType}/createOrder`;
    const [items, setItems] = useState([{ id: "", name: "", quantity: "" }]);
    const router = useRouter();

    const handleAddItem = () => {
        setItems([...items, { id: "", name: "", quantity: "" }]);
    };

    const handleChange = (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newItems = [...items];
        const fieldName = event.target.name as keyof (typeof newItems)[number];
        newItems[index][fieldName] = event.target.value;
        setItems(newItems);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        alert(`Submitting ${orderType} order`);
        console.log(`hitting url: ${url}`);
        console.log(items);
        event.preventDefault();
        const itemsWithNumberQuantity = items.map((item) => ({
            ...item,
            quantity: Number(item.quantity),
        }));
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items: itemsWithNumberQuantity }),
            });
            if (response.ok) {
                router.push("/salesRep");
            } else {
                console.error("Failed to submit order");
            }
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-black">
            <h1 className="text-2xl font-bold mb-6 text-center text-black">
                Create Order
            </h1>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
            >
                {items.map((item, index) => (
                    <div key={index} className="mb-4">
                        <div className="mb-2">
                            <label
                                htmlFor={`id-${index}`}
                                className="block text-gray-700 font-medium mb-1"
                            >
                                Item ID
                            </label>
                            <input
                                type="text"
                                id={`id-${index}`}
                                name="id"
                                value={item.id}
                                onChange={(e) => handleChange(index, e)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor={`name-${index}`}
                                className="block text-gray-700 font-medium mb-1"
                            >
                                Item Name
                            </label>
                            <input
                                type="text"
                                id={`name-${index}`}
                                name="name"
                                value={item.name}
                                onChange={(e) => handleChange(index, e)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor={`quantity-${index}`}
                                className="block text-gray-700 font-medium mb-1"
                            >
                                Item Quantity
                            </label>
                            <input
                                type="number"
                                id={`quantity-${index}`}
                                name="quantity"
                                value={item.quantity}
                                onChange={(e) => handleChange(index, e)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddItem}
                    className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 mb-4"
                >
                    Add Another Item
                </button>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Submit Order
                </button>
            </form>
        </div>
    );
}
