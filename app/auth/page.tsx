"use client";

import { useState } from "react";

export default function AuthPage() {
    const [mode, setMode] = useState<"login" | "register">("login");
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`${mode === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"} muvaffaqiyatli!`);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                    {mode === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email yoki telefon</label>
                        <input
                            name="email"
                            type="text"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Parol</label>
                        <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        {mode === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
                    </button>

                    {mode === "login" && (
                        <div className="text-sm text-right mt-2">
                            <a href="#" className="text-blue-600 hover:underline">
                                Parolni unutdingizmi?
                            </a>
                        </div>
                    )}
                </form>

                <div className="text-center mt-6 text-sm">
                    {mode === "login" ? (
                        <>
                            Hisobingiz yo‘qmi?{" "}
                            <button
                                onClick={() => setMode("register")}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Ro‘yxatdan o‘ting
                            </button>
                        </>
                    ) : (
                        <>
                            Allaqachon hisobingiz bormi?{" "}
                            <button
                                onClick={() => setMode("login")}
                                className="text-blue-600 hover:underline font-medium"
                            >
                                Kirish
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
