// app/contact/page.tsx

export default function ContactPage() {
    return (
        <div className="px-6 py-10 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-700 mb-8">Biz bilan bog‘laning</h1>

            <form className="space-y-6 bg-blue-50 p-6 rounded-none shadow-sm">
                <div>
                    <label htmlFor="name" className="block font-medium mb-1 text-gray-800">Ismingiz</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ismingizni kiriting"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium mb-1 text-gray-800">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@email.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium mb-1 text-gray-800">Xabaringiz</label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full border border-gray-300 px-4 py-2 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Xabaringizni yozing"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-700 text-white px-6 py-3 hover:bg-blue-800 transition rounded-none"
                >
                    Yuborish
                </button>
            </form>

            <div className="mt-10 text-gray-700">
                <p>📞 Telefon: +998 90 123 45 67</p>
                <p>✉️ Email: info@restoranmarket.uz</p>
                <p>📍 Manzil: Toshkent shahri, Yunusobod tumani</p>
            </div>
        </div>
    );
}
