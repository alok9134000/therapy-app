"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/gallery", label: "Gallery" },
    { path: "/faq", label: "FAQ" },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    pathname !== null && (pathname === path || pathname.startsWith(path + "/"));

  return (
    <nav className="backdrop-blur-xl bg-white/70 border-b border-gray-200 shadow-md sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">AR</span>
            </div>
            <h1 className="hidden sm:block text-xl font-semibold text-gray-800 tracking-wide font-poppins">
              Pediatric Therapy
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative group text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-primary-600"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-primary-500 transition-all duration-300 group-hover:w-full ${
                    isActive(item.path) ? "w-full" : ""
                  }`}
                />
              </Link>
            ))}
            <Button className="bg-primary-500 hover:from-pink-600 hover:to-yellow-500 text-white rounded-full px-6 shadow-md transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none transition-all duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pt-3 pb-4 bg-white/80 backdrop-blur-lg border-t rounded-b-xl shadow-md space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.path)
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-pink-600 hover:to-yellow-500 text-white rounded-full shadow-md transition-all duration-300">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
