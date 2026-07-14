import React from 'react';
import { waLink } from '@/lib/contact';

export const metadata = {
  title: 'Jasa Service & Perbaikan Membran – Hidayah Membrane',
  description: 'Jasa service dan perbaikan kanopi/atap membran: kain sobek, bocor, rangka berkarat, hingga membran kendur. Dikerjakan cepat dan bergaransi.',
};

export default function ServiceMembranPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">

      {/* Banner Header */}
      <section className="bg-primary py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Service &amp; <br className="md:hidden" /> Perbaikan Membran</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-emerald-100 text-lg font-medium opacity-90 italic">Cepat Tanggap, Kanopi Kembali Prima</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">

          {/* Badge Aksen */}
          <div className="inline-block bg-gray-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Solusi Cepat
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black text-primary mb-6 leading-tight">
            Membran Bermasalah? <span className="text-secondary">Kami Perbaiki</span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Kain membran sobek, kendur, bocor saat hujan deras, atau rangka mulai berkarat? Anda tidak perlu bongkar total. Sering kali masalah bisa langsung kami tangani di lokasi.
              </p>

              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                <strong className="text-primary">Hidayah Membrane</strong> melayani service dan perbaikan untuk segala keluhan kanopi maupun atap membran. Teknisi kami akan mendiagnosis sumber masalah terlebih dahulu, lalu memperbaikinya dengan rapi dan bergaransi.
              </p>

              {/* Box Masalah yang Ditangani */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                <h3 className="font-bold text-primary mb-3">Keluhan yang Sering Kami Tangani</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                  <li><strong className="text-gray-800">Kain membran sobek</strong> akibat angin kencang atau usia pakai.</li>
                  <li><strong className="text-gray-800">Membran kendur</strong> sehingga air hujan menggenang di atas kanopi.</li>
                  <li><strong className="text-gray-800">Rangka berkarat / bengkok</strong> akibat cuaca atau benturan.</li>
                  <li><strong className="text-gray-800">Kebocoran di sambungan</strong> antara membran dan rangka.</li>
                  <li><strong className="text-gray-800">Warna membran kusam</strong> dan perlu pembersihan menyeluruh.</li>
                </ul>
              </div>

              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong className="text-gray-800">Layanan Bongkar-Pasang:</strong> Renovasi rumah? Kami bantu lepas dan pasang ulang kanopi membran Anda.</li>
                <li><strong className="text-gray-800">Pengecekan Menyeluruh:</strong> Kami pastikan kanopi kembali kokoh sebelum meninggalkan lokasi.</li>
              </ul>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img
                  src="/images-canopy/15.jpeg"
                  alt="Service & Perbaikan Membran"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white z-10">
                  <p className="text-xs font-bold text-primary text-center tracking-wide uppercase">Teknisi Siap Datang</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Ringkas */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-primary flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-primary font-bold text-xl">Kanopi Membran Anda Bermasalah?</h4>
              <p className="text-sm text-gray-500">Hubungi kami, teknisi siap datang dan memperbaiki secepatnya.</p>
            </div>
            <a
              href={waLink("Halo Hidayah Membrane, kanopi/atap membran saya bermasalah dan butuh diservice.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Panggil Teknisi
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
