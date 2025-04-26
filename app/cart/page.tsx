"use client";

import Image from "next/image";
import { useState } from "react";

const initialCart = [
    {
        id: 1,
        name: "Mol go‘shti",
        price: 65000,
        quantity: 1,
        image: "/images/beef.jpg",
    },
    {
        id: 2,
        name: "Pomidor",
        price: 12000,
        quantity: 2,
        image: "/images/tomato.jpg",
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCart);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">🛒 Savat</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Savat bo‘sh.</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center gap-4">
                                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-none" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">
                                        {item.price.toLocaleString()} so‘m x {item.quantity} ={" "}
                                        <strong>{(item.price * item.quantity).toLocaleString()} so‘m</strong>
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 py-1 bg-gray-300 rounded-none"
                                        >
                                            –
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 py-1 bg-gray-300 rounded-none"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="ml-4 text-red-600 text-sm hover:underline"
                                        >
                                            O‘chirish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="text-right mt-8">
                        <p className="text-xl font-bold mb-2">
                            Jami: <span className="text-blue-700">{total.toLocaleString()} so‘m</span>
                        </p>
                        <button className="px-6 py-3 bg-blue-700 text-white rounded-none hover:bg-blue-800">
                            Buyurtma berish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
