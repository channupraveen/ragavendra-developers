"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will get back to you within 24 hours.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80')" }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
          <p className="text-white/70 mt-3 text-sm sm:text-base">We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Contact Form */}
          <div>
            <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8">Fill out the form below and our team will reach out within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm bg-white" />
                <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm bg-white" />
              </div>
              <input type="email" placeholder="Email Address *" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm bg-white" />
              <textarea placeholder="Your Message (Optional)" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm bg-white resize-none" />
              <button type="submit" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-xl shadow-amber-500/25">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Information</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Office Address</h4>
                    <p className="text-gray-500 text-sm mt-0.5">Medchal, Hyderabad,<br />Telangana 501401</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                    <a href="tel:+919876543210" className="text-amber-600 hover:underline text-sm mt-0.5 block">+91 98765 43210</a>
                    <a href="tel:+919876543211" className="text-amber-600 hover:underline text-sm block">+91 98765 43211</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                    <a href="mailto:info@ragavendradevelopers.com" className="text-amber-600 hover:underline text-sm mt-0.5 block">info@ragavendradevelopers.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Office Hours</h4>
                    <p className="text-gray-500 text-sm mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: 10:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a href="https://wa.me/919876543210?text=Hi, I'm interested in your apartments" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 text-center transition shadow-lg">
                <svg className="w-6 h-6 mx-auto mb-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                <span className="text-sm font-bold">WhatsApp</span>
              </a>
              <a href="tel:+919876543210" className="bg-amber-500 hover:bg-amber-600 text-white rounded-xl p-4 text-center transition shadow-lg">
                <svg className="w-6 h-6 mx-auto mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-sm font-bold">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Find Us Here</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-8 px-4">
        <p className="text-gray-500 text-xs sm:text-sm">© 2026 Ragavendra Developers. All rights reserved.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition-all">
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>
    </main>
  );
}
