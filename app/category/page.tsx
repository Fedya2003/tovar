// app/category/page.tsx

import Link from "next/link";

export default function CategoryPage() {
    const categories = [
        {
            name: "Go‘sht",
            description: "Mol, qo‘y, va tovuq go‘shtlari",
        },
        {
            name: "Sabzavot",
            description: "Yangi sabzavotlar – pomidor, kartoshka, bodring...",
        },
        {
            name: "Meva",
            description: "Olma, banan, anor, uzum va boshqa mevalar",
        },
        {
            name: "Sut mahsulotlari",
            description: "Sut, yogurt, smetana, pishloq",
        },
    ];

    return (
        <div className="px-6 py-10">
            <h1 className="text-3xl font-bold text-blue-700 mb-8">Kategoriyalar</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((cat, idx) => (
                    <Link href={`/category/${encodeURIComponent(cat.name)}`}
                        key={idx}
                        className="border-l-4 border-blue-700 bg-blue-50 p-6 hover:bg-blue-100 transition rounded-none shadow-sm"
                    >
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{cat.name}</h2>
                        <p className="text-gray-700">{cat.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
