"use client";

import { useState } from "react";

export default function CheckoutPage() {
    const [form, setForm] = useState({
        address: "",
        phone: "",
        date: "",
        payment: "naqd",
    });
    const [showModal, setShowModal] = useState(false);
    const [loadingLocation, setLoadingLocation] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowModal(true);
    };

    const detectLocation = () => {
        if (!navigator.geolocation) {
            alert("Sizning qurilmangiz geolokatsiyani qo‘llab-quvvatlamaydi.");
            return;
        }

        setLoadingLocation(true);

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Oddiy ko‘rinishdagi manzilga o‘girish uchun (reverse geocoding)
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
                const data = await res.json();
                setForm((prev) => ({ ...prev, address: data.display_name || "" }));
                setLoadingLocation(false);
            },
            () => {
                alert("Lokatsiyani aniqlab bo‘lmadi.");
                setLoadingLocation(false);
            }
        );
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">📦 Buyurtma tafsilotlari</h1>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 border rounded-xl shadow">
                <div>
                    <label className="block font-semibold mb-1">Yetkazish manzili</label>
                    <div className="flex gap-2">
                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                            className="w-full border px-3 py-2 rounded-md"
                            placeholder="Toshkent, Chilonzor..."
                        />
                        <button
                            type="button"
                            onClick={detectLocation}
                            className="bg-blue-600 text-white px-4 rounded-md text-sm"
                        >
                            {loadingLocation ? "⏳..." : "📍 Lokatsiya"}
                        </button>
                    </div>
                </div>

                <div>
                    <label className="block font-semibold mb-1">Telefon raqam</label>
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded-md"
                        placeholder="+998 90 123 45 67"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Yetkazish sanasi</label>
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="w-full border px-3 py-2 rounded-md"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">To‘lov usuli</label>
                    <select
                        name="payment"
                        value={form.payment}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-md"
                    >
                        <option value="naqd">Naqd</option>
                        <option value="karta">Karta</option>
                        <option value="keyin">Keyin to‘lov</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800"
                >
                    Buyurtma berish
                </button>
            </form>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center space-y-4">
                        <h2 className="text-2xl font-bold text-green-600">✅ Buyurtma qabul qilindi!</h2>
                        <p>Biz siz bilan tez orada bog‘lanamiz.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md"
                        >
                            Yopish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
