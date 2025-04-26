"use client";

import { useState } from "react";

const categories = ["Barchasi", "Go‘sht", "Sabzavot", "Meva"];

const mockProducts = [
    { id: 1, name: "Mol go‘shti", category: "Go‘sht", price: 65000, stock: 10 },
    { id: 2, name: "Sabzi", category: "Sabzavot", price: 5000, stock: 100 },
    { id: 3, name: "Olma", category: "Meva", price: 12000, stock: 50 },
];

export default function AdminDashboard() {
    const [products, setProducts] = useState(mockProducts);
    const [selectedCategory, setSelectedCategory] = useState("Barchasi");

    const handleDelete = (id: number) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const filteredProducts =
        selectedCategory === "Barchasi"
            ? products
            : products.filter((p) => p.category === selectedCategory);

    return (
        <div className="min-h-screen bg-blue-50 p-6">
            <h1 className="text-2xl font-bold text-blue-800 mb-6">🛠 Admin Panel</h1>

            {/* Kategoriya tugmalari */}
            <div className="flex flex-wrap gap-3 mb-6">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-md border 
              ${selectedCategory === cat
                                ? "bg-blue-700 text-white"
                                : "bg-white text-blue-700 border-blue-500"
                            } hover:shadow`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Qo‘shish tugmasi */}
            <div className="mb-6 flex justify-end">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                    ➕ Mahsulot qo‘shish
                </button>
            </div>

            {/* Jadval */}
            <div className="overflow-auto bg-white shadow-md rounded-lg">
                <table className="w-full text-sm text-left">
                    <thead className="bg-blue-100 text-blue-700 uppercase">
                        <tr>
                            <th className="px-4 py-3">ID</th>
                            <th className="px-4 py-3">Nomi</th>
                            <th className="px-4 py-3">Kategoriya</th>
                            <th className="px-4 py-3">Narxi</th>
                            <th className="px-4 py-3">Qoldiq</th>
                            <th className="px-4 py-3">Amallar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((p) => (
                            <tr key={p.id} className="border-b hover:bg-blue-50">
                                <td className="px-4 py-3">{p.id}</td>
                                <td className="px-4 py-3">{p.name}</td>
                                <td className="px-4 py-3">{p.category}</td>
                                <td className="px-4 py-3">{p.price.toLocaleString()} so‘m</td>
                                <td className="px-4 py-3">{p.stock}</td>
                                <td className="px-4 py-3 space-x-2">
                                    <button className="text-blue-600 hover:underline">Tahrirlash</button>
                                    <button
                                        onClick={() => handleDelete(p.id)}
                                        className="text-red-600 hover:underline"
                                    >
                                        O‘chirish
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredProducts.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                                    Mahsulotlar topilmadi.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
