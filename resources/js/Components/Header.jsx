import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Header({ auth }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className="hidden sm:flex justify-center space-x-6 text-sm text-gray-600 mx-auto">
                    <a href="" className="hover:text-primary transition">Home</a>
                    <a href="" className="hover:text-primary transition">Blog</a>
                    <a href="" className="hover:text-primary transition">About</a>
                    <a href="" className="hover:text-primary transition">Contact</a>
                </nav>

                {auth.user ? (
                    <div className="hidden sm:flex space-x-4 items-center text-sm">
                        <div className="relative inline-block text-left" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="inline-flex items-center space-x-2 text-sm text-gray-700 hover:text-primary transition"
                            >
                                <span>{auth.user.name}</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md z-10">
                                    <Link href={route('logout')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">Logout</Link>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="hidden sm:flex space-x-4 items-center text-sm">
                        <Link href={route('login')} className="text-gray-600 hover:text-primary transition">Login</Link>
                        <Link href={route('register')} className="btn-secondary px-4 py-1.5">Register</Link>
                    </div>
                )}
            </div>

            <div
                className={`
                    sm:hidden overflow-hidden transition-all duration-300 
                    ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="flex flex-col px-4 pb-4 pt-2 space-y-2 text-sm text-gray-600">
                    <a href="" className="hover:text-primary transition">Home</a>
                    <a href="" className="hover:text-primary transition">Blog</a>
                    <a href="" className="hover:text-primary transition">About</a>
                    <a href="" className="hover:text-primary transition">Contact</a>
                    <hr />
                    {auth.user ? (
                        <Link href="#" className="hover:text-primary transition">Dashboard</Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="hover:text-primary transition">Login</Link>
                            <Link href={route('register')} className="hover:text-primary transition">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
