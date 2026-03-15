import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">
              restaurant_menu
            </span>
            <span className="text-xl font-black tracking-tight text-slate-900">
              D'MELS <span className="text-primary">CATERING</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#hero" className="relative hover:text-primary transition-colors duration-200">
              Home
            </a>
            <a href="#menu" className="relative hover:text-primary transition-colors duration-200">
              Menu
            </a>
            <a href="#why-us" className="relative hover:text-primary transition-colors duration-200">
              Why Us
            </a>
            <a href="#testimonials" className="relative hover:text-primary transition-colors duration-200">
              Testimonials
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full
              font-bold text-sm
              hover:scale-105 hover:bg-primary/90
              transition-all duration-300
              shadow-lg shadow-primary/25"
            >
              Order Now
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}