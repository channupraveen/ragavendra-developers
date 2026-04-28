"use client";
import { useState } from "react";
import Link from "next/link";

const allProjects = [
  { id: "sri-sai-residency", name: "Sri Sai Residency", location: "Medchal, Hyderabad", price: "₹45L – ₹72L", type: "2 & 3 BHK", status: "Ongoing", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", amenities: ["Swimming Pool", "Gym", "Children's Play Area", "24/7 Security", "Clubhouse", "Power Backup"] },
  { id: "lakshmi-gardens", name: "Lakshmi Gardens", location: "Kompally, Hyderabad", price: "₹55L – ₹95L", type: "2, 3 & 4 BHK", status: "Ongoing", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80", amenities: ["Clubhouse", "Jogging Track", "Power Backup", "Landscaped Gardens", "Indoor Games", "Multipurpose Hall"] },
  { id: "golden-heights", name: "Golden Heights", location: "Secunderabad, Hyderabad", price: "₹38L – ₹65L", type: "2 & 3 BHK", status: "Completed", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", amenities: ["Parking", "Gym", "Community Hall", "Rain Water Harvesting", "CCTV", "Intercom"] },
  { id: "sunrise-towers", name: "Sunrise Towers", location: "Medchal, Hyderabad", price: "₹60L – ₹1.1Cr", type: "3 & 4 BHK", status: "Upcoming", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", amenities: ["Rooftop Pool", "Co-working Space", "EV Charging", "Smart Home", "Amphitheatre", "Yoga Deck"] },
];

const tabs = ["All", "Ongoing", "Completed", "Upcoming"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter(p => p.status === active);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Projects</h1>
          <p className="text-white/70 mt-3 text-sm sm:text-base">Explore our premium apartments across Hyderabad</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:pt-16">
        <div className="flex gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-14">
          {tabs.map(t => (
            <button key={t} onClick={() => setActive(t)} className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition ${active === t ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>{t}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 pb-16 sm:pb-24">
          {filtered.map(p => (
            <Link key={p.id} href={`/projects/${p.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="relative h-52 sm:h-72 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-3 left-3"><span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${p.status === "Ongoing" ? "bg-green-500" : p.status === "Completed" ? "bg-blue-500" : "bg-orange-500"}`}>{p.status}</span></div>
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{p.name}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {p.location}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.amenities.slice(0, 4).map(a => (
                    <span key={a} className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">{a}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <div className="text-amber-600 font-bold text-lg">{p.price}</div>
                    <div className="text-gray-400 text-xs">{p.type}</div>
                  </div>
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-amber-500 transition">View Details</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back nav */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="bg-white/90 backdrop-blur shadow-lg rounded-full p-2.5 flex items-center gap-2 text-gray-700 hover:text-amber-600 transition text-sm font-medium px-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Home
        </Link>
      </div>
    </main>
  );
}
