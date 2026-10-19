import React from "react";
import { CONTACT, waLink } from "@/lib/contact";
import TehijooCredit from "@/components/TehijooCredit";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-16 pb-8 border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Kolom 1: Logo & Media Sosial */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/logo.png"
              alt="Logo Hidayah Membrane"
              className="w-12 h-12 object-contain shrink-0"
            />

            <div className="flex flex-col">
              <h1 className="text-primary font-extrabold text-xl leading-none">Hidayah Membrane</h1>
              <p className="text-secondary text-[9px] font-bold tracking-[0.15em] mt-1">KANOPI &amp; ATAP MEMBRAN</p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white hover:bg-secondary w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 uppercase text-[10px] font-bold shadow-md transform hover:-translate-y-1 hover:shadow-secondary/40">IG</a>
            <a href={CONTACT.facebookUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white hover:bg-secondary w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 uppercase text-[10px] font-bold shadow-md transform hover:-translate-y-1 hover:shadow-secondary/40">FB</a>
          </div>
        </div>

        {/* Kolom 2: Sekilas Kami */}
        <div className="flex flex-col text-neutral-text">
          <h4 className="text-primary font-bold mb-4 border-b border-primary/20 pb-2">Sekilas Kami</h4>
          <p className="text-sm leading-relaxed">
            Hidayah Membrane adalah spesialis jasa pemasangan kanopi membran, atap membran, gazebo, dan service perbaikan membran. Dikerjakan teknisi ahli, bergaransi, dan rapi.
          </p>
        </div>

        {/* Kolom 3: Kontak Kami (Bisa diklik langsung) */}
        <div className="flex flex-col text-neutral-text">
          <h4 className="text-primary font-bold mb-4 border-b border-primary/20 pb-2">Kontak Kami</h4>
          <div className="flex flex-col gap-4 text-sm font-medium">
            {/* Link WhatsApp */}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {CONTACT.whatsappDisplay}
            </a>
            {/* Link Email */}
            <a href={`mailto:${CONTACT.email}`} className="hover:text-secondary transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-primary group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              {CONTACT.email}
            </a>
            {/* Jam Operasional */}
            <p className="flex items-center gap-2 text-gray-600">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {CONTACT.operatingHours}
            </p>
          </div>
        </div>

        {/* Kolom 4: Alamat (Membuka Google Maps) */}
        <div className="flex flex-col text-neutral-text">
          <h4 className="text-primary font-bold mb-4 border-b border-primary/20 pb-2">Area Layanan</h4>

          {/* Link Google Maps Otomatis ke area operasional */}
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-secondary transition-colors flex items-start gap-2 leading-relaxed group"
          >
            <svg className="w-5 h-5 text-primary group-hover:text-secondary transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {CONTACT.address}
          </a>
        </div>

      </div>

      {/* Baris bawah: copyright klien + kredit pengembang */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Hidayah Membrane. All Rights Reserved.</p>
        <TehijooCredit variant="text" from="Hidayah Membrane" theme="light" accent="var(--color-primary, #0f5c42)" />
      </div>
    </footer>
  );
}
