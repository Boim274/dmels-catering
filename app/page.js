"use client";

import { useState } from "react";


export default function HomePage() {

  // list menu
  const menuItems = [
    {
      title: "Rendang",
      price: "Rp 45.000",
      category: "Daging",
      desc: "Potongan daging empuk bumbu khas Minang yang meresap sempurna.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATlF6uuAbKJvT51AMMqx8_0pSXUsT7sWa5QkWcQpV137x6w_Vl3d9ngUrKcqnYDmxOhoeD6fymGLrahshst61G8fWb7XkktxdZuqpHRr8seEqI1trFwqVPHvxVwUTrHdXlmpaoNNL8Ll9bI8h3flrSz5Ex2GP8anSq_ht-cth3mpjCj8rDGLKSqxUPBTlkALVnKyNw-BNpY6th1nmcKaOW4u2WMpCgb5wf4mo2XeNkoX78MCs_Cyxqeui_l2qJzVz9GvBtMOy5bg",
      tag: "Terlaris",
    },
    {
      title: "Sop Ayam Kampung",
      price: "Rp 35.000",
      category: "Sop",
      desc: "Kuah bening segar dengan rempah asli dan ayam kampung pilihan.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3pGKcji77JDaWgn-NV29trmkdBtThTIRd5EOsxmrQle6cAGH2kPbPmD3qoxGBhT-789F3_UQnibVakVyi0QN7wTFAshyPYK5LsWcMPznBnQSdxMKbszV91z3H0Q3XHg4EaoxB5htppOVGeoMznuA_IODJ331GJRt8DvN63rVEqt3SpdiqV07V_ikNfl21mEi6-qQsM1NLqXng__3fMBgJyT4TtYDKCDYWktijee0URwrwDk70MFkOkF7OmGmHhYYVPCrldI9t3Q",
    },
    {
      title: "Sop Ayam Negeri",
      price: "Rp 25.000",
      category: "Sop",
      desc: "Pilihan ekonomis yang tetap nikmat, cocok untuk menu harian keluarga.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQkx-V8I51CSZcWO-_swiMa4PRSFkpoXGPzfEpuOsmcmEEV694_gvZmAEn2RwOUOjYLGZM9uVTREbYy4n0R69Pxh-4bZOV8L8ESB92BG1spXReqAxbhpKEodWJlXqXewhffQermWe_cTY8oU99W6VGeB9gya0bb_qdXvA4hyWDiUUH3IWL07SxqaZmuT97WYQlUlZyDOqpmb7yGiiX3J0oTm1fi8vZIDYvU5jvKjsHAjUE4KwqnU4DXu_GXWITpPXlREJhCt1YtA",
    },
    {
      title: "Ikan Acar Kuning",
      price: "Rp 30.000",
      category: "Ikan",
      desc: "Ikan goreng segar dengan bumbu acar kuning yang asam segar.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5YHvYopXD7s6V8LenoUnc2InmbTPQ6YKVaxVpKcB6L39CJC1DQXHLG8X3wxR28NcG3Zu7lylj_pZ5lhU-8jiAKz88PFAYh1U48tsKR9t24rZejPMGavwubncohhjwZ87g0Hshyigp9v_lIEv9tknpMIzQ534QyLuqbZqAB8j5_0wRBXLScy81haPfOlLPzEnwNlwnrOEKvOTCpIdcogI08G2ABIB1k-VAT5X1CcWacrlEPY0QpBmNS6nwQSbczukeelI5-TYRwA",
    },
    {
      title: "Buncis Wortel Kuning",
      price: "Rp 15.000",
      category: "Sayur",
      desc: "Sayuran segar yang kaya rasa, teman sempurna untuk nasi hangat.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbsjR-UKtwyQC8sSVO-0MLCh-X0GlGLGrJby_r0mQIlyVaD5wSESnHPZYqbHYfuzzPGz3VY6C3VCj9R6WjSJi1d-h0PV09eQs2DuvawAjwnrf16LtT_CLOpV_rXtqWQ48yhCuklVGzZZNvRXlsGc-Z65P0irRr8EB2GSIzSzp2aNO3JlXDWBlM91eVE0136VWiXXn6zi4UooViYV8R8mc2PA21nV8kh_84jBBmbV7nfrHMGJU9W-tqk0FRsVTf7wXjdIdQMnyyNA",
    },
    {
      title: "Oseng Daging Mercon",
      price: "Rp 40.000",
      category: "Daging",
      desc: "Pedas mantap menggugah selera dengan irisan daging yang empuk.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUYcsYVbU0GRXEqzk7LNA1e2gycV7arYwldSBoZdjk0fjv7kEqBC8C4IMpGUVwbdv7-s6bxUntu2BxuAhPjV3OP8wPehB2FyTEGsg5C6l0krr0x8M6ZmLdaQUibCg0mDn6gS1erD9mSuJ-3Y_sYWqlfT_3Qqh0dcqq6YkipgNbe8lCagJyeLBwTdJJPL7ueNvWp6_8VfZk6jEqT79CePQTQtCKsLn8cs6sGcSJQLh0hd00a6Xfwrt7hoyQ3I1jTgef9jlXqhojDA",
      tag: "Pedas!",
      tagColor: "bg-red-600 text-white",
    },
  ];
  // list testi
  const testimonials = [
    {
      name: "Sari Rahayu",
      role: "Warga Mutiara Bekasi Jaya",
      text: "Rendangnya juara banget! Dagingnya empuk dan bumbunya benar-benar meresap sampai ke dalam. Persis masakan Ibu saya di rumah.",
      initial: "S",
    },
    {
      name: "Bambang S.",
      role: "Pelanggan Setia",
      text: "Sop Ayam Kampungnya segar sekali, pas buat menu keluarga saat akhir pekan. Pengiriman tepat waktu dan pelayanan via WhatsApp sangat ramah.",
      initial: "B",
    },
    {
      name: "Linda Wijaya",
      role: "Ibu Rumah Tangga",
      text: "Sangat terbantu dengan asisten AI-nya, proses pesan jadi praktis banget. Menunya bervariasi dan rasanya konsisten enak setiap kali order.",
      initial: "L",
    },
  ];
  // list FAQ
  const faqs = [
    {
      q: "Bagaimana cara memesannya?",
      a: "Sangat mudah! Pilih menu, masukkan ke keranjang, lalu checkout akan diarahkan ke WhatsApp untuk konfirmasi pesanan.",
    },
    {
      q: "Di mana area pengirimannya?",
      a: "Kami melayani area Mutiara Bekasi Jaya dan sekitarnya di Sindangmulya, Cibarusah.",
    },
    {
      q: "Apakah bisa memesan menu di luar katalog?",
      a: "Tentu! Kami menerima custom order. Silakan hubungi via WhatsApp untuk diskusi menu.",
    },
    {
      q: "Metode pembayaran apa yang tersedia?",
      a: "Pembayaran dilakukan melalui transfer bank manual setelah pesanan dikonfirmasi.",
    },
    {
      q: "Apa peran Asisten AI dalam pemesanan?",
      a: "AI membantu konfirmasi pesanan, hitung ongkir otomatis, dan total pembayaran.",
    },
  ];
  const [active, setActive] = useState("Semua");
  const [keyword, setKeyword] = useState("");
  const categories = ["Semua", "Daging", "Sayur", "Sop", "Ikan"];
  const handleFilter = (cat) => {
    setActive(cat);
  };
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };
  const filteredMenu = menuItems.filter((item) => {
    const matchCategory =
      active === "Semua" || item.category === active;
    const matchSearch = item.title
      .toLowerCase()
      .includes(keyword.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
    {/* Hero Section */}
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKFQCFbY8Hn6V0r1iwnowN6nxQg2NNQvz1KYHJ54-WrkdIrHzInuq_UBUnXUnZGDrsFLKiu4T_998y2DHHWlXbs95oCttXhmrnM44fwC7GRUfmFjP0UEzEucy-zJSbqOnAxXrh6WjMLnG9hEX74a5wuIL2-YodEGCyphkQ2gtb6w8jADm8P3Ycba3oQjFG3L7T6teQ0oaLnsGL7GKbDt8ZlzFQ8xjg4lJUtSAMFCKA7mQvbFQHPrj8vzDvqWV5_119LFfgLAT6IQ"
          alt="Top-down view of Indonesian dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">

          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-orange-600 bg-orange-50 rounded-full uppercase">
            Kualitas Dapur Ibu
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Catering Rumahan Lezat dari{" "}
            <span className="text-orange-600">
              Dapur Ibu Unni
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Nikmati hidangan lauk pauk khas Nusantara yang dimasak dengan cinta.
            Pesan sekarang, kami antar sampai depan pintu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-full text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
              Lihat Menu
            </button>

            <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-full text-lg hover:bg-slate-50 transition-all">
              Tentang Kami
            </button>
          </div>

        </div>
      </div>

    </section>

     {/* Menu */}
     <section className="py-24 bg-orange-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4">
            Menu Pilihan Kami
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
          Hidangan segar yang dibuat setiap hari dengan rempah-rempah pilihan terbaik dari pasar tradisional.
          </p>

          {/* Search + Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-4 rounded-[2rem] shadow-sm border border-slate-100 max-w-5xl mx-auto">

        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>

          <input
            type="text"
            value={keyword}
            onChange={handleSearch}
            placeholder="Cari hidangan favoritmu..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-full text-sm focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                active === cat
                  ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                  : "bg-white text-slate-600 hover:bg-orange-50 hover:text-orange-600 border border-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {item.tag && (
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                      item.tagColor || "bg-white/90 text-orange-600"
                    }`}
                  >
                    {item.tag}
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="text-orange-600 font-black">
                    {item.price}
                  </span>
                </div>

                <p className="text-slate-500 text-sm mb-6">
                  {item.desc}
                </p>

                <button className="w-full flex items-center justify-center gap-2 py-3 bg-slate-50 group-hover:bg-orange-600 group-hover:text-white text-slate-700 font-bold rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    add_shopping_cart
                  </span>
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Testimonial */}
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Testimoni Pelanggan
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">
            Apa Kata Mereka
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4">
            Kebahagiaan Anda adalah kepuasan bagi kami.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-orange-50/30 rounded-3xl border border-orange-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-orange-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined fill-current"
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 text-lg italic mb-8 flex-grow">
                "{item.text}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-24 bg-orange-50/10" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">
            Pertanyaan Populer
          </span>
          <h2 className="text-4xl font-black text-slate-900 mt-2">
            Sering Ditanyakan
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details
              key={index}
              className="group border border-slate-100 rounded-2xl bg-white/80 open:bg-orange-50/30 transition-all duration-300"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <h3 className="text-lg font-bold text-slate-900">
                  {item.q}
                </h3>
                <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>

              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
          
    {/* Custom Order Banner */}
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 mt-24">
      <div className="relative rounded-3xl overflow-hidden bg-red-600 p-8 md:p-16 text-white text-center">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ingin menu lain?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10">
            Kami melayani pesanan khusus sesuai keinginan Anda. Hubungi kami via WhatsApp untuk request menu favoritmu!
          </p>

          <a
            href="https://wa.me/6281317591661?text=Halo%20saya%20ingin%20custom%20menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 font-black rounded-full text-lg hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined">
              chat
            </span>
            Chat WhatsApp
          </a>

        </div>
      </div>
    </section>

    {/* About Us Section */}
    <section className="py-24 border-t border-slate-100 " id="about-us">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-3xl -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-50 rounded-full -z-10"></div>

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAFQ7xSnfbiQa9-vQqiW_AqylWuHPrRmP4xIrWcjVrKOLfsao36ewmlHvrZa3cpMAiLXa2AIFotNySDJSaExQuhzPpDhr656IvUXQM11wbvUdJcWrou8RN8bKvh0dM4HRjNmY2E5v1TP-Fvl8bI_iv6Doel0Xd7Mh2yxD01fqexy5yYi5D-VhuykNe4cUN_kBFCAw8_OhZn2HhEHMKAG8MprFJbQFWPHJtABPv5dxEIuE5K08YeDtuxi2II3NIfZHFHioSOwFVNQ"
            alt="Dapur catering"
            className="rounded-[2.5rem] shadow-2xl w-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-8">
            Dari Dapur Kecil, <br />Dengan Kasih Sayang
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              D'mels Catering lahir dari tangan dingin <strong>Ibu Unni</strong>, 
              seorang ibu yang percaya bahwa makanan terbaik adalah yang dimasak 
              dengan kesabaran dan rempah alami.
            </p>

            <p>
              Kami berdedikasi menyediakan kualitas makanan rumahan premium untuk 
              1-5 keluarga setiap harinya. Bagi kami, memasak bukan sekadar pekerjaan, 
              tapi cara berbagi kebahagiaan.
            </p>
          </div>

          {/* Customer avatars */}
          <div className="mt-10 flex items-center gap-6" >
            <div className="flex -space-x-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Mzwbf47XKjXsqqdSVsa7pEqDCWnicrrslJ-MV_-hVX0diraE5GKfLu0SP9180aBhvEWmPdnGKF4umaaNSLBg5ylFN0vkxLpmkQXUIhoqDHmRCLBiZ6oMnW3wMx4Ee1rJ492mqqVD4vDG3mCmv40I7EKCmKKdjvm9TsveBOUoX0_jGY9MLQVkVEA1B3nuOjmMWAs9quoVlfcIlck-OQB2ABeGSHEoQAUPhDOHrKfGFXbT1KwTvb0smE5dSjbXnMGvzLbta4XKOw"
                alt="client"
                className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUu5nlzHOFZPhJDOkpfwG73wpt8Ebu6Sg92XiunK4Vzfr7afZA-JAUQVnrexHfwbfeCW_8CbGwxJ_QYoi7hYB_0E2wyWWh1swEiThTfV1rQgBujGEbOn4x9zyG8nWv8fTkXaJ0LDhDLJ2-91IWpA9keUpO2FJf-QUh-Qm5bq7gMpO0Qkc5W7vUQSSGwhiEw6VlpS--5Nf5ZaJepKqgX9xx393x3WlDmlkdMFPMToX26TDAxe1vC_oZfDRUaMlHVVjYwU5u93AUA"
                alt="client"
                className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZvA5xeTqmqGdolkZxsQx2fWdcSD2ffv9nwIX6kDOKd3ShI7_K4CU6E5H1fk3SbHkWxEjUCUr93ldAcJVaLmCEp0CJOmsU4Gf7OcUP50j1B1ZLebubONGEHfr3Na69fkLKT58E5dM6c2AahbGIUnaxqR9JYfKEc0XssOjCagp_T59D9nhoGVf3rW_QlikFAbsbKnqIDsLjOf-F5oLMPs7RAa5Ey7v-JNYEaZBtbMO174V5gjtZDDPKCuraiZdhu0SvJnvo2HFfrQ"
                alt="client"
                className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
              />
            </div>

            <p className="text-sm font-bold text-slate-500">
              Bergabung dengan 50+ <br /> pelanggan setia kami
            </p>
          </div>
        </div>

      </div>
    </section>
      
    </>
  );
}
