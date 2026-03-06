"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
       
        { label: "Articles", href: "/Articles", variant: "btn-ghost" },
        { label: "Creation", href: "/Creation", variant: "btn-neutral" },
    ];

    return (
        <>

            {open && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                    onClick={() => setOpen(false)}
                />
            )}


            <div
                className={`fixed top-0 left-0 h-full w-60 bg-base-100 z-50 flex flex-col gap-2 p-8 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
                style={{ boxShadow: "8px 0 40px rgba(0,0,0,0.08)" }}
            >
                <span className="text-2xl font-bold mb-8" style={{ fontFamily: "'Georgia', serif" }}>
                    GoalZone
                </span>

                <nav className="flex flex-col gap-2">
                    {links.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="px-4 py-3 rounded-xl text-base-content/70 hover:text-base-content hover:bg-base-200 transition-all text-sm font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className="mt-auto btn btn-ghost btn-sm self-start gap-2 text-base-content/40"
                    onClick={() => setOpen(false)}
                >
                    ✕ Fermer
                </button>
            </div>

            {/* Floating Navbar */}
            <div className="sticky top-4 z-30 px-4 md:px-8">
                <nav
                    className="flex items-center h-14 px-4 gap-4 bg-base-100/80 backdrop-blur-md"
                    style={{
                        borderRadius: "1rem",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
                    }}
                >

                    <button
                        className="btn btn-ghost btn-circle btn-sm"
                        onClick={() => setOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>


                    <a href="/" className="text-lg font-bold shrink-0" style={{ fontFamily: "'Georgia', serif" }}>
                        GoalZone
                    </a>


                    <div className="hidden lg:flex items-center gap-1">
                        {links.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`btn btn-sm rounded-xl ${item.variant}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>


                    <label className="flex items-center cursor-pointer gap-2 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input type="checkbox" value="synthwave" className="toggle toggle-sm theme-controller" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </label>
                </nav>
            </div>
        </>
    );
}
