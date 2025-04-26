// app/products/[id]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";

// Mahsulotlar ro'yxati (hardkodlangan)
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

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const product = allProducts.find((prod) => prod.id === parseInt(id));

    if (!product) {
        notFound(); // Agar mahsulot topilmasa 404 sahifasi ko'rsatiladi
    }

    return (
        <div className="px-6 py-10">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-blue-700 mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-4">Kategoriya: {product.category}</p>
                        <p className="text-xl font-semibold text-gray-900 mb-4">Narxi: {product.price.toLocaleString()} so‘m</p>
                        <p className="text-gray-700 mb-4">Qadoq: {product.package}</p>
                        <p className={`text-lg font-medium ${product.available ? "text-green-600" : "text-red-600"}`}>
                            {product.available ? "Mavjud" : "Hozirda yo‘q"}
                        </p>
                        <button
                            disabled={!product.available}
                            className={`mt-4 w-full px-4 py-2 rounded-none text-white ${product.available ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-400 cursor-not-allowed"}`}
                        >
                            Savatga qo‘shish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
