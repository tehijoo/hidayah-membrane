import React from 'react';
import { waLink } from '@/lib/contact';

export const metadata = {
  title: 'Jasa Pasang Kanopi Alderon – Hidayah Membrane',
  description: 'Jasa pemasangan kanopi Alderon (UPVC) anti karat dengan peredam panas dan suara yang baik untuk rumah dan bangunan. Ringan, awet, dan bergaransi.',
};

export default function KanopiAlderonPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Kanopi Alderon</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-emerald-100 text-lg font-medium opacity-90 italic">Anti Karat &amp; Peredam Panas Terbaik</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">

          {/* Badge Aksen */}
          <div className="inline-block bg-gray-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Ringan &amp; Anti Karat
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black text-primary mb-6 leading-tight">
            Awet Bertahun-tahun, <span className="text-secondary">Bebas Karat</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Bosan dengan kanopi seng atau spandek yang berisik saat hujan dan mudah berkarat? Kanopi Alderon (UPVC) hadir sebagai solusi atap yang ringan, tahan lama, dan jauh lebih senyap.
              </p>

              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                <strong className="text-primary">Hidayah Membrane</strong> melayani jasa pemasangan kanopi Alderon untuk rumah tinggal maupun bangunan komersial. Material UPVC yang kami gunakan tidak berkarat, tahan terhadap paparan sinar matahari dan air hujan, serta memiliki lapisan peredam panas dan suara yang jauh lebih baik dibanding atap metal biasa.
              </p>

              <p>
                Rangka kanopi menggunakan besi hollow atau galvanis yang dilapisi cat anti karat, dipadukan dengan lembaran Alderon pilihan sesuai kebutuhan dan bujet Anda.
              </p>

              {/* Daftar Paket Pemasangan */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                <h3 className="font-bold text-primary mb-3">Pilihan Tipe Alderon</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                  <li><strong className="text-gray-800">Alderon Solid:</strong> Lembaran padat, kokoh, dan tahan benturan.</li>
                  <li><strong className="text-gray-800">Alderon Twinwall:</strong> Struktur berongga, lebih ringan dan hemat biaya.</li>
                  <li><strong className="text-gray-800">Alderon Multiwall:</strong> Peredam panas paling maksimal untuk area yang langsung terpapar matahari.</li>
                </ul>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong className="text-gray-800">Cocok Untuk:</strong> Carport rumah, teras, ruko, hingga gudang dan pabrik.</li>
                <li><strong className="text-gray-800">Keunggulan:</strong> Anti karat, tidak berisik saat hujan, dan pemasangan bergaransi.</li>
              </ul>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img
                  src="/images-canopy/32.jpeg"
                  alt="Hasil Pemasangan Kanopi Alderon"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white z-10">
                  <p className="text-xs font-bold text-primary text-center tracking-wide uppercase">Hasil Pemasangan Kami</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Ringkas */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-primary font-bold text-xl">Mau Pasang Kanopi Alderon?</h4>
              <p className="text-sm text-gray-500">Konsultasi gratis &amp; survei lokasi sekarang.</p>
            </div>
            <a
              href={waLink("Halo Hidayah Membrane, saya ingin pasang kanopi Alderon.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Hubungi Admin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
