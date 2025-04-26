"use client";

import Link from "next/link";
import Image from "next/image";  // Image komponentini import qilish
import { useState } from "react";

const allProducts = [
    {
        id: 1,
        name: "Mol go‘shti",
        price: 65000,
        unit: "kg",
        package: "Vakuum qadoq",
        available: true,
        category: "Go‘sht",
        image: "/images/beef.jpg",
    },
    {
        id: 2,
        name: "Pomidor",
        price: 12000,
        unit: "kg",
        package: "Qog‘oz qop",
        available: true,
        category: "Sabzavot",
        image: "/images/tomato.jpg",
    },
    {
        id: 3,
        name: "Olma",
        price: 18000,
        unit: "kg",
        package: "Qog‘oz quti",
        available: false,
        category: "Meva",
        image: "/images/apple.jpg",
    },
];

export default function ProductsPage() {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("");
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const filteredProducts = allProducts.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
        const matchesAvailability = showAvailableOnly ? product.available : true;
        return matchesSearch && matchesCategory && matchesAvailability;
    });

    return (
        <div className="px-6 py-10">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Mahsulotlar</h1>

            {/* 🔍 Qidiruv va filtrlar */}
            <div className="mb-8 grid md:grid-cols-3 gap-4">
                <input
                    type="text"
                    placeholder="Mahsulot qidirish..."
                    className="w-full border px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full border px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Barcha kategoriyalar</option>
                    <option value="Go‘sht">Go‘sht</option>
                    <option value="Sabzavot">Sabzavot</option>
                    <option value="Meva">Meva</option>
                </select>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={showAvailableOnly}
                        onChange={(e) => setShowAvailableOnly(e.target.checked)}
                    />
                    Faqat mavjud mahsulotlar
                </label>
            </div>

            {/* 🧊 Mahsulot kartalari */}
            <div className="grid md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <div className="border bg-blue-50 rounded-none p-4 hover:bg-blue-100 transition shadow-sm">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}  // Kenglikni o'rnatish
                                height={300} // Balandlikni o'rnatish
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                            <p className="text-gray-600">Narxi: {product.price.toLocaleString()} so‘m / {product.unit}</p>
                            <p className="text-gray-600">Qadoq: {product.package}</p>
                            <p className={`mt-1 font-medium ${product.available ? "text-green-600" : "text-red-600"}`}>
                                {product.available ? "Mavjud" : "Hozirda yo‘q"}
                            </p>
                            <button
                                disabled={!product.available}
                                className={`mt-4 w-full px-4 py-2 rounded-none text-white ${product.available ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-400 cursor-not-allowed"}`}
                            >
                                Savatga qo‘shish
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-10">Hech qanday mahsulot topilmadi.</p>
            )}
        </div>
    );
}
