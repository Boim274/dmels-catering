export default function Footer() {
    return (
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
  
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  restaurant_menu
                </span>
                <span className="text-xl font-black tracking-tight text-slate-900">
                  D'MELS <span className="text-primary">CATERING</span>
                </span>
              </div>
  
              <p className="text-slate-600 leading-relaxed mb-6">
                Bringing the heart of homemade cooking to your special occasions since 2010.
              </p>
  
              {/* Social */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-slate-100 text-slate-600
                  hover:bg-primary hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">
                    social_leaderboard
                  </span>
                </a>
  
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-slate-100 text-slate-600
                  hover:bg-primary hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">
                    photo_camera
                  </span>
                </a>
  
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-slate-100 text-slate-600
                  hover:bg-primary hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">
                    alternate_email
                  </span>
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-3 text-slate-600">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Full Menu</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Event Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">FAQ</a></li>
              </ul>
            </div>
  
            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span>123 Culinary Road, Food District, Jakarta</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span>+62 21 555 0123</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span>hello@dmels-catering.com</span>
                </li>
              </ul>
            </div>
  
            {/* Opening Hours */}
            <div>
              <h4 className="font-bold text-lg text-slate-900">Opening Hours</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-semibold text-slate-800">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span className="font-semibold text-slate-800">09:00 - 22:00</span>
                </li>
              </ul>
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            © 2024 D'Mels Catering. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }