"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Back nav */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/" className="bg-white/90 backdrop-blur shadow-lg rounded-full p-2.5 flex items-center gap-2 text-gray-700 hover:text-amber-600 transition text-sm font-medium px-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>About Us</h1>
          <p className="text-white/70 mt-3 text-sm sm:text-base">Building trust, one home at a time</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Our Story</span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-3 mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Crafting Premium Homes Since 2012</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              Ragavendra Developers was founded in 2012 with a simple mission — to build homes that families can be proud of. Starting from a single project in Medchal, we have grown into one of the most trusted real estate developers in the Hyderabad metropolitan area.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              Our founder envisioned creating living spaces that blend modern design, quality construction, and affordability. Today, with over 15 projects delivered and 500+ happy families, we continue to uphold that vision with every brick we lay.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              We are RERA registered and committed to transparent dealings, on-time delivery, and post-handover support. Our projects are strategically located near ORR, IT corridors, schools, and hospitals, ensuring convenience and connectivity.
            </p>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80" alt="Ragavendra Developers project" className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gray-900 text-white p-4 sm:p-6 rounded-xl shadow-xl">
              <div className="text-2xl sm:text-3xl font-bold text-amber-400">500+</div>
              <div className="text-xs sm:text-sm text-gray-300">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "12+", label: "Years of Experience" },
            { num: "15+", label: "Projects Delivered" },
            { num: "500+", label: "Happy Families" },
            { num: "5L+", label: "Sq.ft Developed" },
          ].map(s => (
            <div key={s.label}>
              <div className="text-3xl sm:text-5xl font-bold text-amber-400 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
              <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-7 sm:p-10 border border-amber-100">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To deliver high-quality, affordable homes that exceed customer expectations. We aim to create vibrant communities where families thrive, with modern amenities, sustainable design, and a commitment to excellence in every detail.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl p-7 sm:p-10 border border-gray-100">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To be Hyderabad&apos;s most trusted real estate developer, known for integrity, innovation, and creating homes that stand the test of time. We envision a future where every family can own a premium home without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Core Values</span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🤝", title: "Integrity", desc: "Transparent dealings and honest commitments at every step of the journey." },
              { icon: "⭐", title: "Quality", desc: "Premium materials, expert craftsmanship, and rigorous quality checks." },
              { icon: "🏠", title: "Customer First", desc: "Your dream home is our priority. We listen, we adapt, we deliver." },
              { icon: "🌱", title: "Sustainability", desc: "Eco-friendly practices including rainwater harvesting and green spaces." },
              { icon: "⏱️", title: "Timeliness", desc: "We respect your time. Projects delivered within the committed timeline." },
              { icon: "🔧", title: "After-Sale Support", desc: "Our relationship doesn&apos;t end at handover. We&apos;re here for the long run." },
            ].map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition">
                <div className="text-2xl sm:text-3xl mb-3">{v.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Ready to Find Your Dream Home?</h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base max-w-xl mx-auto">Explore our projects or talk to our team today.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/projects" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-lg">View Projects</Link>
          <Link href="/contact" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3.5 rounded-xl font-bold text-sm transition">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-xs sm:text-sm">© 2026 Ragavendra Developers. All rights reserved.</p>
      </footer>
    </main>
  );
}
