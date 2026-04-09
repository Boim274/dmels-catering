import Link from "next/link";

export default function Navbar() {
  return (
 
     <header className="fixed top-0 w-full z-50 bg-white/90  backdrop-blur-md border-b border-slate-200 shadow-sm">
     <nav className="flex justify-between items-center h-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
       
       {/* Logo */}
       <div className="text-2xl font-black tracking-tighter text-orange-600 ">
         D&apos;mels Catering
       </div>

       {/* Menu */}
       <div className="hidden md:flex items-center space-x-8">
         <a
           href="#"
           className="font-sans text-sm font-medium text-orange-600  border-b-2 border-orange-600 pb-1 hover:text-orange-500 dark:hover:text-orange-300 transition-colors"
         >
           Menu
         </a>
         <a
           href="#about-us"
           className="font-sans text-sm font-medium text-slate-600  hover:text-orange-500  transition-colors"
         >
           About Us
         </a>
         <a
           href="#faq"
           className="font-sans text-sm font-medium text-slate-600  hover:text-orange-500 transition-colors"
         >
           FAQ
         </a>
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