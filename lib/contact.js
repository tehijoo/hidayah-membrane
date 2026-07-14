// Ganti nilai-nilai di bawah ini dengan data asli Hidayah Membrane
// (email dan link Instagram/Facebook yang baru).
// Alamat sengaja TIDAK diubah karena lokasi tetap sama.
export const CONTACT = {
  whatsappNumber: "6281311087822", // format: 62 + nomor tanpa angka 0 di depan
  whatsappDisplay: "0813-1108-7822",
  email: "info@hidayahmembrane.com",
  instagramUrl: "#",
  facebookUrl: "#",
  address: "Jalan Semeru Raya, Grogol Petamburan, Jakarta Barat 11450",
  mapsUrl: "https://maps.google.com/?q=Jalan+Semeru+Raya,+Grogol+Petamburan,+Jakarta+Barat+11450",
  operatingHours: "Setiap Hari · 08.00 – 20.00 WIB",
};

export function waLink(message) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
