"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("menu");
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["menu", "about-us", "faq", "home"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= top && scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90  backdrop-blur-md border-b border-slate-200 shadow-sm">
     <nav className="flex justify-between items-center h-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
       
       {/* Logo */}
       <div className="text-2xl font-black tracking-tighter text-orange-600 ">
         D&apos;mels Catering
       </div>

       {/* Menu */}
       <div className="hidden md:flex items-center space-x-8">
        {[
          { id: "home", label: "Home" },
          { id: "menu", label: "Menu" },
          { id: "faq", label: "FAQ" },
          { id: "about-us", label: "About Us" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm font-medium pb-1 transition-colors ${
              active === item.id
                ? "text-orange-600 border-b-2 border-orange-600"
                : "text-slate-600 hover:text-orange-500"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

       {/* Actions */}
       <div className="flex items-center space-x-4">
         <button className="p-2 text-slate-600 hover:text-orange-500 transition-colors relative">
           <span className="material-symbols-outlined">
             shopping_cart
           </span>
           <span className="absolute top-1 right-1 w-2 h-2 bg-orange-600 rounded-full"></span>
         </button>

         <button className="hidden md:block px-5 py-2 text-sm font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition-all scale-95 active:duration-100">
           Order Now
         </button>
       </div>

     </nav>
   </header>
  );
}