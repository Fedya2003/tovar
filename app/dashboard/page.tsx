"use client";

import { useState } from "react";

export default function UserDashboardPage() {
    const [tab, setTab] = useState<"orders" | "profile">("orders");

    const orders = [
        {
            id: 1,
            date: "2025-04-25",
            items: ["Go‘sht (2kg)", "Piyoz (3kg)"],
            status: "Yig‘ilmoqda",
        },
        {
            id: 2,
            date: "2025-04-20",
            items: ["Sabzi (1kg)"],
            status: "Yetkazildi",
        },
    ];

    const [profile, setProfile] = useState({
        name: "Ali Valiyev",
        phone: "+998 90 123 45 67",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleProfileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Profil yangilandi!");
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">👤 Foydalanuvchi sahifasi</h1>

            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => setTab("orders")}
                    className={`px-4 py-2 rounded-md ${tab === "orders" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                >
                    Buyurtmalar
                </button>
                <button
                    onClick={() => setTab("profile")}
                    className={`px-4 py-2 rounded-md ${tab === "profile" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700"
                        }`}
                >
                    Profil
                </button>
            </div>

            {tab === "orders" ? (
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="border rounded-xl p-4 shadow-sm bg-white flex flex-col gap-2"
                        >
                            <div className="text-sm text-gray-600">📅 {order.date}</div>
                            <ul className="text-sm text-gray-800 list-disc pl-5">
                                {order.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div>
                                <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
                                    {order.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <form
                    onSubmit={handleProfileSubmit}
                    className="space-y-4 bg-white p-6 rounded-xl shadow"
                >
                    <div>
                        <label className="block font-medium mb-1">Ism</label>
                        <input
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Telefon raqam</label>
                        <input
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Yangi parol</label>
                        <input
                            name="password"
                            type="password"
                            value={profile.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800"
                    >
                        Saqlash
                    </button>
                </form>
            )}

            <div className="mt-10 text-right">
                <button className="text-red-600 underline hover:text-red-800">
                    🚪 Chiqish (Logout)
                </button>
            </div>
        </div>
    );
}
