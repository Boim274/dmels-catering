import Image from "next/image";

export default function HomePage() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-20 pb-28 lg:pt-28 lg:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide rounded-full bg-primary/10 text-primary">
              AUTHENTIC TASTE
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-slate-900">
              Delicious <span className="text-primary">Homemade</span> Catering
            </h1>

            <p className="max-w-xl mb-10 text-lg leading-relaxed text-slate-600">
              Experience the warmth of home-cooked meals with our premium catering services.
              From intimate gatherings to grand celebrations, we bring quality and passion
              to every plate.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 text-lg font-bold text-white rounded-xl bg-primary shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
                View Menu
              </button>

              <button className="px-8 py-4 text-lg font-bold rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-colors">
                Chat WA
              </button>
            </div>

            {/* Client Rating */}
            <div className="flex items-center gap-6 mt-12">
              {/* Avatars */}
              <div className="flex -space-x-3">
                <div className="w-12 h-12 overflow-hidden bg-slate-200 border-4 rounded-full border-background-light">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBStKLBqu56ZH31Hp0lB5kJaGBIdc9lkBsM1OHyjQ6rdiwFUAJUC05sQj2z7NH-KTM9zlHPeB_3bSSCjF0nmlujYbp0oeW2zP9ML4JJ5TflOiocKx_W8yJuxccX7zQWrrkojME7kpo0uuO7XFQd08OfqTOxPaHm0ObCCg4U6fBrduDettJQpB5Q7mQ66dF8MMbVLznUddBKo9DXFnDltxgDmm4MpA9FU6ZFMlQTH5yJG3g1JpCGPh2NV-Vwer6U4nH8R_2Abx8GNfTT"
                    className="w-full h-full object-cover"
                    alt="Customer"
                  />
                </div>
                <div className="w-12 h-12 overflow-hidden bg-slate-200 border-4 rounded-full border-background-light">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb9VSEtlZFmVs3QB0cyNOwYbSIbsb9wcqLQrufbHFyoDYKT3Y42-7ubSumOOsx_ohsGBIQ6MgKwLXoLl0PjrAutAjhgf9Pqd-0GkK5a3E2L40leFanSck4sXd9UQrGinannEXXGAhcYiaz7Um2nuPscWghP9VB18InaADfVJ7fL9MEZ8n4y_BsjmLegooigdr5LmdAZYgiT75-u6pZq2FQ_5FW083uc2bGg8d-P5bXKpIceDxzT0cdc-12Y2q1huJ-zUNgu9iKleHP"
                    className="w-full h-full object-cover"
                    alt="Customer"
                  />
                </div>
                <div className="w-12 h-12 overflow-hidden bg-slate-200 border-4 rounded-full border-background-light">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApptrWG5Gtw5JxQg4Rc3tYuoVgiYCODYLRwsZw3B9zuha9q_6SYxWG56IHjiQzHxXIbCt3w_8Kh-uFZsDCExJx-Mkx5fKZ8rXK8WAtzB7W_HJyKDg2kjotmLJg8WL8ofeiYELVVvrMRN_mhzZbdKHBq-Xov_7u1TqUDOs5XfeG1kP9UZ_3h9tNfO0_LRDqeGEtPRpAA4F7QSJcnQ-PL8b3Zv7OdoCR0UzSZHdcRkLd4M6f7i_YKe84dZtL3vWa-dsspP56qM27kmtM"
                    className="w-full h-full object-cover"
                    alt="Customer"
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="text-sm">
                <p className="font-semibold text-slate-900">1,200+ Happy Clients</p>
                <div className="flex text-yellow-400">
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                  <span className="material-symbols-outlined text-sm fill-1">star</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/20 blur-3xl opacity-30"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 aspect-square">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFqEeoiB8UbUvtfZGY7jPV-D5zo9ukWuRs3q0kqc9y7vvTZi6aanDkPSy44fK61DfsY5UEWzBIUTiYJIFmCUQt4HmuuLyuZE-28l2NM03qq7Rto2VeSeNagDxlPZ84tH7nxyKA620gKDz4mrIq_as7abeLRRpW7iIzcq71I6-HufT3wZCm0SyFVuTiBuzDv-9582WKBAcsJ_aGw6kGZjFQBYKN33ggwN5t4rDAW-UNDIG_nfDRlsIc_iIq-T90HuWIyLMfKRwi6wWy"
                className="w-full h-full object-cover"
                alt="Catering Food"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* Featured Menu */}
    <section id="menu" class="py-28 bg-background-light ">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

                <div class="max-w-xl">

                    <span class="text-sm font-semibold text-primary tracking-wider uppercase">
                      Our Special
                    </span>

                    <h2 class="text-4xl lg:text-5xl font-black mt-3 mb-4 tracking-tight text-slate-900 ">
                        Featured Menu
                    </h2>

                    <p class="text-slate-600 ">
                        Discover our most loved dishes, prepared with fresh ingredients
                        and traditional recipes that bring comfort and flavor to every bite.
                    </p>

                </div>

              
                <a href="#"
                  class="inline-flex items-center gap-2 font-semibold text-primary hover:text-orange-600 transition-colors group">

                    Explore Full Menu

                    <span class="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>

                </a>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              
                <div class="group relative bg-background-light  rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">

                  
                    <span class="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        Popular
                    </span>

                  
                    <div class="h-64 overflow-hidden">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG0MjhI4m8kh_Nkx45veDTA8INb6eUG2Y8Cd3OdVo7mExiENkUeqGnLHzhS4e_lyiPGd2l-hDPo_jxerXtQDwyGH6oBE9l_1k82C7_nu7xAJttXh6jUWxg1ySt8j3iJ7lo6wv6FOw1CgIBqSk2i8_hMCmuRVwsWF_1XNhl3Bb2F6D_rfLgrTtij86febTihO40KMB3_-MdmMPxKY5H0AC12PtnDARgYamvp5ex1PKaiinHxTOzT-Lq5ScfrCQXGfW7sCY9aeZi_af8"
                            alt="Nasi Lemak Special"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        ></img>
                    </div>

                  
                    <div class="p-8">

                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                                Nasi Lemak Special
                            </h3>
                            <span class="text-primary font-black text-xl">
                                $12.00
                            </span>
                        </div>

                      
                        <div class="flex items-center text-yellow-400 text-sm mb-4">
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="ml-2 text-slate-500 text-xs">(4.9)</span>
                        </div>

                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Traditional fragrant rice cooked in coconut milk and pandan leaf, served with crispy anchovies and sambal.
                        </p>

                        <button class="w-full py-3 rounded-xl border-2 border-primary/20 text-primary font-semibold transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            Add to Order
                        </button>

                    </div>
                </div>

            
                <div class="group relative bg-background-light  rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">

                    
                    <span class="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        Popular
                    </span>

                    <div class="h-64 overflow-hidden">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWf3dQPgLpqn2Vuuf9K4dp20_yabJptaljG2nyYLDcFiBek8_qKt-fKvLh-93lqxzO-GjOPZNax-pbHNHILMwTBqEHoWA-gPii0lSd4HxlVnKcLTUQ4xbqZthnd07hPUzLhTsWGXEUKxK4OiZMMJZtiCQZO7BiuaHYXRzqCTFmgTzYI9SWjqNJM09zjBLrNTC5yRqY2xB6dDVkHSRehw-WtuzuEgU4M37yC6HJtBG62dbowai3p0CQFgHhmo60Ay1SEpFufYOkXVC7"
                            alt="Beef Rendang"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        ></img>
                    </div>

                    <div class="p-8">

                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                                Beef Rendang Platter
                            </h3>
                            <span class="text-primary font-black text-xl">
                                $18.50
                            </span>
                        </div>

                      
                        <div class="flex items-center text-yellow-400 text-sm mb-4">
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="ml-2 text-slate-500 text-xs">(4.9)</span>
                        </div>

                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Slow-cooked beef in a rich aromatic coconut curry sauce. Our signature family recipe.
                        </p>

                        <button class="w-full py-3 rounded-xl border-2 border-primary/20 text-primary font-semibold transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            Add to Order
                        </button>

                    </div>
                </div>

                <div class="group relative bg-background-light  rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">

                    
                    <span class="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                        Popular
                    </span>

                    <div class="h-64 overflow-hidden">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo2I6Ix9trPY9agLwmY_iYpGYLDZF84Zb9wdZvsEcqdJzerEeXaTu7OE4gtGHc3ckZt_OCj7xqgUi3GHEdL4-skcav3eIaz2OaSguX92MrvQa2-yIu_CZ4GbKfP-a431EZ9KBUvRER2wxvGJTM0XllmVmeImQSj3Ca1UsVlACWbBLvrZcb5HLoStGivAutjZ3FA71Uaf5l5BibeeQD9J4Y2tmBFytEdDXnZg4Ue67hqj4veY2HOcJSzB_xBvqozbF_7M_lyDcEZHWX"
                            alt="Honey Glazed Chicken"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        ></img>
                    </div>

                    <div class="p-8">

                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                                Honey Glazed Chicken
                            </h3>
                            <span class="text-primary font-black text-xl">
                                $15.00
                            </span>
                        </div>

                      
                        <div class="flex items-center text-yellow-400 text-sm mb-4">
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="material-symbols-outlined text-sm">star</span>
                            <span class="ml-2 text-slate-500 text-xs">(4.9)</span>
                        </div>

                        <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            Succulent roasted chicken glazed with honey and local herbs for a sweet savory flavor.
                        </p>

                        <button class="w-full py-3 rounded-xl border-2 border-primary/20 text-primary font-semibold transition-all group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            Add to Order
                        </button>

                    </div>
                </div>

            </div>
            </div>
        
    </section>

    {/* Why Choose Us */}
    <section id="why-us" className="py-28 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Our Strength
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-5 tracking-tight text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We don’t just cook meals. We craft memorable dining experiences
            that bring people together with authentic flavors and warm hospitality.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="group p-10 rounded-3xl bg-white border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                eco
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              Fresh Ingredients
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We carefully source our vegetables, herbs, and meats daily
              from trusted local markets to guarantee freshness, quality,
              and natural flavor in every dish.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-10 rounded-3xl bg-white border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-white text-3xl">
                home
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              Homemade Taste
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Every recipe follows our family traditions passed down through
              generations, bringing the comforting taste of authentic homemade
              cooking to your table.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-10 rounded-3xl bg-white border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">
                schedule
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
              On-Time Delivery
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Your schedule matters. Our catering team ensures every order
              arrives fresh, hot, and exactly when your event begins.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section id="testimonials" className="py-28 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-4 tracking-tight text-slate-900">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Thousands of happy customers trust our catering service for their events,
            celebrations, and gatherings.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="group bg-white p-8 rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="flex text-yellow-400 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <p className="text-slate-600 mb-7 leading-relaxed italic">
              “The best catering service we've ever used. The Beef Rendang
              was incredibly tender and the flavors were absolutely authentic.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH6tF1mj9GsL7BSuDF6QuC5aiG0sMzoCZB3le8-6ser7ia-B_3dvmO5ETEnybyHIF3YJLGjVscjG_ucmk1-g5qtjuM0Q4TI2FFFijf34QenUXmyhEnNp7iACeABgXVSzj8d5u9FKzTTosZrl3Yu-Nr6K0ClhhDRqmTGPvpuu-f4wCYcHlZJoIyAgBQavZEgX7BNteNr3k6HjIyH3y2EicHtCqQ6hfvoZ3GHdp4OCknqA8vkGlSzVBoXrXojS1s7Pnb1fGxmJFsWS9s"
                  className="w-full h-full object-cover"
                  alt="Customer"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Sarah Jenkins</p>
                <p className="text-xs text-slate-500">Event Organizer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group bg-white p-8 rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
            {/* Rating */}
            <div className="flex text-yellow-400 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">
                  star
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-600 mb-7 leading-relaxed italic">
              “Fantastic service for our company event. They were punctual,
              professional, and the food became the highlight of the day.”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6KFQ_neeqzcGY1cneoSPCBsIg9F1c4U0jocx8AOK55d0gxXroottBDV3AHEjLZ5IKSGyW9FDOivm8HQB5RPGqAdRowWr5p5XWbLtYL7hFjA_pzVvKnf94txm6ALjzuy7KGO8MiKuK6FgyOZ1wcDB7soSBnka4bBEIEq-cF5Jt_Ms-bqB8Fm1kvXXYrdq18mFaSPMry4pEzJ-7nVdUhJaHDMi3Mn0FTi432FhtKmInwDrvA4Y3F00xNDknn7S-sDwVfNmK4KhGyMlw"
                  className="w-full h-full object-cover"
                  alt="Customer"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">David Chen</p>
                <p className="text-xs text-slate-500">Corporate Client</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group bg-white p-8 rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all">
            {/* Rating */}
            <div className="flex text-yellow-400 mb-5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">
                  star
                </span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-slate-600 mb-7 leading-relaxed italic">
              “Ordering was seamless and the portions were generous.
              I highly recommend the Honey Glazed Chicken.”
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMjN_gwlzsip7dj57IRI79A_5dF_F_NUdc_n0rBAt9vTzXbCGwkKq2O7ihcJ058cmAC37UCsmiVAuBBmSl6kzYpfOg7I32M_D5pxlwJsePya-v21ZDO0DV50m3SJO2Sd53y4xKVwx1p7lYQ4gt0VBus7Sc768wkRWOjNRRUi5JTFxRIdknyPhnXlOqFAGR7Z44sYig_kX0Ig_vlitDw9j_07mBKnzD06TkiHsvQaBMLhbuMc4pe3t6LuB8QO9x9nZUWVqXLYWKvE5u"
                  className="w-full h-full object-cover"
                  alt="Customer"
                />
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">Maya Rodriguez</p>
                <p className="text-xs text-slate-500">Wedding Client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-10 py-16 lg:px-20 lg:py-20">
          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/30 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/30 blur-[120px] rounded-full"></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-transparent to-secondary/20 mix-blend-overlay"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text */}
            <div className="text-center lg:text-left max-w-xl">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Event Catering
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-6 leading-tight">
                Planning an Event?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Let us handle the food while you enjoy the moment.
                From small gatherings to large celebrations, our catering
                service delivers unforgettable flavors for your event.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/40">
                Get a Quote
              </button>
              <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-md">
                Call Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
}
