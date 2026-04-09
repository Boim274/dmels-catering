export default function Footer() {
    return (
      <footer className="bg-slate-50  border-t border-slate-200  w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-black tracking-tighter text-orange-600 ">
              D&apos;mels Catering
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Menghadirkan kehangatan masakan rumah ke meja makan keluarga Anda
              dengan bumbu rempah asli nusantara.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 ">
              Kontak Kami
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <span className="material-symbols-outlined text-orange-600 text-lg">
                  location_on
                </span>
                <span>
                  Mutiara Bekasi Jaya Blok E6 No 7,
                  <br />
                  Sindangmulya, Cibarusah
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm text-slate-500">
                <span className="material-symbols-outlined text-orange-600 text-lg">
                  call
                </span>
                <a
                  href="tel:+6281317591661"
                  className="hover:text-orange-600 transition-colors"
                >
                  +62 813-1759-1661
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 ">
              Tautan Cepat
            </h4>

            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-200  flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-sm text-slate-500 ">
            © {new Date().getFullYear()} D&apos;mels Catering. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
              <span className="material-symbols-outlined">facebook</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
          </div>

        </div>

      </div>
    </footer>
    );
  }