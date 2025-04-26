'use client'

import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full px-6 py-4 shadow-md bg-white flex justify-between items-center sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-green-600">
                Tovarlab.uz
            </Link>

            <nav className="hidden md:flex gap-6 text-gray-700 text-sm">
                <Link href="/products" className="hover:text-green-600">Mahsulotlar</Link>
                <Link href="/#why-us" className="hover:text-green-600">Afzalliklar</Link>
                <Link href="/#contact" className="hover:text-green-600">Aloqa</Link>
            </nav>

            <div className="flex gap-3">
                <button className="text-sm border rounded px-4 py-1 hover:bg-gray-100">Kirish</button>
                <button className="text-sm bg-green-600 text-white rounded px-4 py-1 hover:bg-green-700">Ro`yxatdan o`tish</button>
            </div>
        </header>
    )
}
