// app/page.tsx

import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-blue-100 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Restoraningiz uchun kerakli mahsulotlar shu yerda!</h1>
        <p className="mb-6 text-lg">Tez, ishonchli va sifatli yetkazib berish</p>
        <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-none">Mahsulotlarni ko‘rish</Button>
      </section>

      {/* Afzalliklar */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">🚚 Tez yetkazib berish</h3>
          <p>Buyurtmalaringizni qisqa muddatda yetkazamiz</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">✅ Kafolat</h3>
          <p>Har bir mahsulotga sifat kafolati</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🥬 Sifatli mahsulotlar</h3>
          <p>Faqatgina eng yaxshi yetkazuvchilardan</p>
        </div>
      </section>

      {/* Kategoriyalar */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Kategoriyalar</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Go‘sht', 'Sabzavot', 'Meva'].map((kat, idx) => (
            <div key={idx} className="border p-6 bg-blue-50 hover:bg-blue-100 transition rounded-none">
              <h4 className="text-xl font-semibold text-blue-700">{kat}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
