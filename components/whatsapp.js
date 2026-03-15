export default function Whatsapp() {
    return (
      <a
        href="https://wa.me/628123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16
                   bg-[#25D366] text-white rounded-full shadow-2xl
                   hover:scale-110 transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">
          chat
        </span>
      </a>
    );
  }