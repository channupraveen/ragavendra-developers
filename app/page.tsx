"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: "mrr-nilayam",
    name: "Malkaji Ratna Raghavendra Nilayam",
    location: "Medchal, Hyderabad",
    price: "₹45L – ₹72L",
    type: "2 & 3 BHK Apartments",
    status: "Completed",
    img: "/images/projects/MRR-Nilayam/mrr-nilayam(1).jpeg",
    amenities: ["Parking", "Children's Play Area", "24/7 Security", "Power Backup"],
  },
  {
    id: "rv-arcade",
    name: "RV Arcade",
    location: "Medchal, Hyderabad",
    price: "₹45L – ₹72L",
    type: "2 & 3 BHK Apartments",
    status: "Completed",
    img: "/images/projects/RV arcade/img1.jpeg",
    amenities: ["Parking", "Children's Play Area", "24/7 Security", "Power Backup"],
  },
  {
    id: "lakshmi-nilayam",
    name: "Lakshmi Nilayam",
    location: "Medchal, Hyderabad",
    price: "₹35L – ₹50L",
    type: "2 BHK Apartments",
    status: "Completed",
    img: "/images/projects/lakshminilyam/img1.jpeg",
    amenities: ["Parking", "Children's Play Area", "24/7 Security", "Power Backup"],
  },
  {
    id: "my-home-duplex",
    name: "My Home Luxury Duplex",
    location: "KLR NJR Colony, Hyderabad",
    price: "₹1.8Cr – ₹2.5Cr",
    type: "Luxury Duplex House",
    status: "Completed",
    img: "/images/projects/myhome/img1.jpeg",
    amenities: ["Fully Furnished", "Modular Kitchen", "Premium Flooring", "Parking"],
  },
  {
    id: "g-2-independent-house",
    name: "G+2 Independent House",
    location: "Medchal, Hyderabad",
    price: "₹1.6Cr",
    type: "Commercial slot & 2 BHK Apartments",
    status: "Ongoing",
    img: "/images/projects/G+2-independent-House/G+2(4).jpeg",
    amenities: ["Parking", "Rain Water Harvesting", "Children's Play Area", "Landscaped Gardens"],
  },
  {
    id: "sheesa-nilayam",
    name: "Sheesa Nilayam",
    location: "Medchal, Hyderabad",
    price: "₹2Cr",
    type: "G+2 Luxury – 1, 2 & 3 BHK",
    status: "Completed",
    img: "/images/projects/sheesainilayam/img1.png",
    amenities: ["Parking", "Premium Flooring", "Modular Kitchen", "24/7 Security"],
  },
];

const testimonials = [
  { name: "Rajesh Kumar", text: "Excellent quality construction and timely delivery. Very happy with our new home!", rating: 5 },
  { name: "Priya Sharma", text: "The team was very professional and transparent throughout the process. Highly recommend Ragavendra Developers.", rating: 5 },
  { name: "Suresh Reddy", text: "Best value apartments in Medchal area. Great amenities and superb location near ORR.", rating: 4 },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logowithoutname.png" alt="Ragavendra Developers" className="h-12 sm:h-14 object-contain" />
            <div className="leading-tight">
              <div className={`text-sm sm:text-lg font-bold tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`} style={{ fontFamily: "'Playfair Display', serif" }}>Shree Ragavendra</div>
              <div className={`text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold ${scrolled ? "text-amber-600" : "text-amber-400"}`}>Developers</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[["Home", "/"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
              <Link key={label} href={href} className={`text-sm font-medium tracking-wide hover:text-amber-500 transition ${scrolled ? "text-gray-700" : "text-white"}`}>{label}</Link>
            ))}
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg shadow-amber-500/25">Book Site Visit</Link>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 transition-all ${scrolled ? "bg-gray-800" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-xl border-t">
            <nav className="flex flex-col p-4 gap-3">
              {[["Home", "/"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]].map(([label, href]) => (
                <Link key={label} href={href} onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 px-3 rounded-lg hover:bg-amber-50">{label}</Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-amber-500 text-white py-3 px-4 rounded-lg text-center font-semibold">Book Site Visit</Link>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-4 sm:mb-6 px-4 py-1.5 border border-amber-400/50 rounded-full">
            <span className="text-amber-300 text-xs sm:text-sm tracking-[0.15em] uppercase font-medium">Premium Living in Hyderabad</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Premium Apartments<br />
            <span className="text-amber-400">in Medchal</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
            Discover luxurious living spaces crafted with precision, quality, and an unwavering commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-0.5">
              Book Site Visit
            </Link>
            <a href="#projects" className="border-2 border-white/40 hover:border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition hover:bg-white/10">
              Get Brochure
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* STATS BAR */}
      <Section>
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[["12+", "Years Experience"], ["500+", "Happy Families"], ["15+", "Projects Delivered"], ["98%", "Client Satisfaction"]].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl sm:text-4xl font-bold text-amber-400 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{num}</div>
                <div className="text-white/60 text-xs sm:text-sm tracking-wide uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Section>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Our Portfolio</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Featured Projects</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
            </div>
          </Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((p, i) => (
              <Section key={p.id} delay={i * 150}>
                <Link href={`/projects/${p.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-amber-100 transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-52 sm:h-64 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${p.status === "Ongoing" ? "bg-green-500" : "bg-blue-500"}`}>{p.status}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {p.location}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-amber-600 font-bold text-base sm:text-lg">{p.price}</div>
                        <div className="text-gray-400 text-xs">{p.type}</div>
                      </div>
                      <span className="text-amber-500 group-hover:translate-x-1 transition-transform text-sm font-semibold flex items-center gap-1">
                        Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SHORT */}
      <Section>
        <section className="py-16 sm:py-24 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80" alt="Luxury apartment" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-amber-500 text-white p-4 sm:p-6 rounded-xl shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold">12+</div>
                <div className="text-xs sm:text-sm">Years</div>
              </div>
            </div>
            <div>
              <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">About Us</span>
              <h2 className="text-2xl sm:text-4xl font-bold mt-3 mb-4 sm:mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Building Dreams,<br />Delivering Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Ragavendra Developers is a trusted name in Hyderabad&apos;s real estate landscape. With over 12 years of experience, we have delivered 500+ homes with a focus on quality construction, timely delivery, and customer satisfaction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Our projects in Medchal, Kompally, and Secunderabad offer premium living at affordable prices, with world-class amenities and excellent connectivity to IT hubs.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl text-sm font-semibold transition">
                Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>
      </Section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <Section>
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Our Promise</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Why Choose Us</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
            </div>
          </Section>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: "🏗️", title: "Quality Construction", desc: "Premium materials and strict quality checks at every stage of construction." },
              { icon: "⏰", title: "On-Time Delivery", desc: "We believe in commitments. Every project delivered within the promised timeline." },
              { icon: "📋", title: "RERA Approved", desc: "All our projects are RERA registered ensuring complete transparency and trust." },
              { icon: "💰", title: "Best Pricing", desc: "Premium apartments at competitive prices with flexible payment plans." },
            ].map((item, i) => (
              <Section key={item.title} delay={i * 100}>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:shadow-amber-50 transition-all duration-500 hover:-translate-y-1 group">
                  <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <section className="py-16 sm:py-24 bg-gray-900 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-amber-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Testimonials</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mt-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 italic">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold">{t.name[0]}</div>
                    <span className="text-white font-semibold text-sm">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Section>

      {/* LEAD FORM */}
      <Section>
        <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-amber-50 via-white to-amber-50">
          <div className="max-w-xl mx-auto text-center">
            <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Get In Touch</span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-3 mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Interested? Let&apos;s Talk!</h2>
            <p className="text-gray-500 mb-8 sm:mb-10 text-sm sm:text-base">Fill in your details and our team will get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm sm:text-base bg-white" />
              <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm sm:text-base bg-white" />
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm sm:text-base bg-white" />
              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40">
                Get Callback
              </button>
            </form>
          </div>
        </section>
      </Section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Ragavendra Developers" className="w-10 h-10 rounded-lg object-contain" />
              <div>
                <div className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>Ragavendra</div>
                <div className="text-amber-400 text-xs tracking-[0.2em] uppercase">Developers</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Building premium apartments in Hyderabad with quality, trust, and timely delivery since 2012.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-400 text-sm tracking-wider uppercase">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {[["Home", "/"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]].map(([l, h]) => (
                <Link key={l} href={h} className="block text-gray-400 hover:text-white transition">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-400 text-sm tracking-wider uppercase">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Medchal, Hyderabad</p>
              <p>Telangana 501401</p>
              <p>+91 98490 13465</p>
              <p>shreeraghavendradevelopers001@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-400 text-sm tracking-wider uppercase">Office Hours</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Mon – Sat: 9AM – 7PM</p>
              <p>Sunday: 10AM – 5PM</p>
              <p className="text-amber-400 font-semibold mt-3">Site visits by appointment</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-xs sm:text-sm">
          © 2026 Ragavendra Developers. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/919849013465?text=Hi, I'm interested in your apartments" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-xl shadow-green-500/30 hover:scale-110 transition-all">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>

      {/* FLOATING CALL (MOBILE) */}
      <a href="tel:+919849013465" className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-amber-500 hover:bg-amber-600 text-white p-3 sm:p-4 rounded-full shadow-xl shadow-amber-500/30 hover:scale-110 transition-all md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </a>
    </main>
  );
}
