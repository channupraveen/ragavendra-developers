"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const projectsData: Record<string, {name:string;location:string;price:string;type:string;status:string;possession:string;description:string;images:string[];amenities:string[];pricing:{type:string;price:string}[];map:string}> = {
  "mrr-nilayam": {
    name: "Malkaji Ratna Raghavendra Nilayam", location: "Medchal, Hyderabad", price: "₹45L – ₹72L", type: "2 & 3 BHK Apartments", status: "Completed", possession: "Ready to Move",
    description: "Malkaji Ratna Raghavendra Nilayam offers thoughtfully designed 2 & 3 BHK apartments in the heart of Medchal with excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/MRR-Nilayam/mrr-nilayam(1).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(2).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(3).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(4).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(5).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(6).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(7).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(8).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(9).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(10).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(11).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(12).jpg","/images/projects/MRR-Nilayam/mrr-nilayam(13).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(14).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(15).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(16).jpeg","/images/projects/MRR-Nilayam/mrr-nilayam(17).jpeg"],
    amenities: ["Parking","Children's Play Area","24/7 Security","Power Backup","CCTV Surveillance","Intercom Facility","Rain Water Harvesting","Landscaped Gardens"],
    pricing: [{ type: "2 BHK – 1464 sqft", price: "₹60,00,000" }, { type: "3 BHK – 1768 sqft", price: "₹72,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "g-2-independent-house": {
    name: "G+2 Independent House", location: "Medchal, Hyderabad", price: "₹1.6Cr", type: "Commercial slot & 2 BHK Apartments", status: "Ongoing", possession: "Jun 2026",
    description: "A premium G+2 independent house in Medchal featuring a commercial slot on the ground floor and spacious 2 BHK apartments on upper floors.",
    images: ["/images/projects/G+2-independent-House/G+2(1).jpeg","/images/projects/G+2-independent-House/G+2(2).jpeg","/images/projects/G+2-independent-House/G+2(3).jpeg","/images/projects/G+2-independent-House/G+2(4).jpeg","/images/projects/G+2-independent-House/G+2(5).jpeg","/images/projects/G+2-independent-House/G+2(6).jpeg","/images/projects/G+2-independent-House/G+2(7).jpeg","/images/projects/G+2-independent-House/G+2(8).jpeg","/images/projects/G+2-independent-House/G+2(9).jpeg","/images/projects/G+2-independent-House/G+2(10).jpeg","/images/projects/G+2-independent-House/G+2(11).jpeg","/images/projects/G+2-independent-House/G+2(12).jpeg","/images/projects/G+2-independent-House/G+2(13).jpeg","/images/projects/G+2-independent-House/G+2(14).jpeg","/images/projects/G+2-independent-House/G+2(15).jpeg"],
    amenities: ["Parking","Rain Water Harvesting","Children's Play Area","Landscaped Gardens","Fire Safety","24/7 Security","Power Backup","CCTV"],
    pricing: [{ type: "G+2 Independent House", price: "₹1,60,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "lakshmi-gardens": {
    name: "Lakshmi Gardens", location: "Kompally, Hyderabad", price: "₹55L – ₹95L", type: "2, 3 & 4 BHK Apartments", status: "Ongoing", possession: "Mar 2027",
    description: "Lakshmi Gardens is a premium gated community in Kompally offering spacious apartments with world-class amenities and lush green surroundings.",
    images: ["https://images.unsplash.com/photo-1515263487990-61b07816b324?w=900&q=80","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80"],
    amenities: ["Clubhouse","Jogging Track","Power Backup","Landscaped Gardens","Indoor Games","Multipurpose Hall","Swimming Pool","Gym","Tennis Court","Yoga Deck","EV Charging","Rain Water Harvesting"],
    pricing: [{ type: "2 BHK – 1100 sqft", price: "₹55,00,000" },{ type: "3 BHK – 1500 sqft", price: "₹75,00,000" },{ type: "3 BHK – 1700 sqft", price: "₹85,00,000" },{ type: "4 BHK – 2000 sqft", price: "₹95,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4883!3d17.5399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sKompally%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "golden-heights": {
    name: "Golden Heights", location: "Secunderabad, Hyderabad", price: "₹38L – ₹65L", type: "2 & 3 BHK Apartments", status: "Completed", possession: "Ready to Move",
    description: "Golden Heights is a completed project in Secunderabad offering ready-to-move-in apartments with modern amenities and excellent connectivity.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"],
    amenities: ["Parking","Gym","Community Hall","Rain Water Harvesting","CCTV","Intercom","Power Backup","Children's Play Area","Landscaped Gardens","24/7 Security","Fire Safety","Lift"],
    pricing: [{ type: "2 BHK – 950 sqft", price: "₹38,00,000" },{ type: "2 BHK – 1100 sqft", price: "₹45,00,000" },{ type: "3 BHK – 1350 sqft", price: "₹55,00,000" },{ type: "3 BHK – 1550 sqft", price: "₹65,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.5083!3d17.4399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sSecunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "sunrise-towers": {
    name: "Sunrise Towers", location: "Medchal, Hyderabad", price: "₹60L – ₹1.1Cr", type: "3 & 4 BHK Apartments", status: "Upcoming", possession: "Jun 2028",
    description: "Sunrise Towers is our upcoming ultra-premium project featuring smart homes with cutting-edge technology, rooftop amenities, and sustainable living.",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80","https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80","https://images.unsplash.com/photo-1515263487990-61b07816b324?w=900&q=80"],
    amenities: ["Rooftop Pool","Co-working Space","EV Charging","Smart Home","Amphitheatre","Yoga Deck","Gym","Indoor Games","Party Hall","CCTV","24/7 Security","Vastu Compliant"],
    pricing: [{ type: "3 BHK – 1600 sqft", price: "₹60,00,000" },{ type: "3 BHK – 1850 sqft", price: "₹75,00,000" },{ type: "4 BHK – 2100 sqft", price: "₹92,00,000" },{ type: "4 BHK – 2400 sqft", price: "₹1,10,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.id as string;
  const project = projectsData[slug];
  const [activeImg, setActiveImg] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  if (!project) return <div className="min-h-screen flex items-center justify-center text-gray-500">Project not found. <Link href="/projects" className="text-amber-500 ml-2 underline">View all projects</Link></div>;

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/projects" className="bg-white/90 backdrop-blur shadow-lg rounded-full p-2.5 flex items-center gap-2 text-gray-700 hover:text-amber-600 transition text-sm font-medium px-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Projects
        </Link>
      </div>

      {/* Main Image — object-contain keeps natural aspect ratio, no stretching */}
      <section className="relative bg-gray-900">
        <div className="w-full flex items-center justify-center" style={{ maxHeight: "75vh" }}>
          <img src={project.images[activeImg]} alt={project.name} className="max-w-full max-h-[75vh] object-contain transition-all duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-4 sm:left-8 z-10">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${project.status === "Ongoing" ? "bg-green-500" : project.status === "Completed" ? "bg-blue-500" : "bg-orange-500"}`}>{project.status}</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{project.name}</h1>
          <p className="text-white/80 text-sm sm:text-base mt-1 flex items-center gap-1 drop-shadow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
            {project.location}
          </p>
        </div>
      </section>

      {/* Thumbnail strip */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "thin" }}>
            {project.images.map((img: string, i: number) => (
              <button key={i} onClick={() => setActiveImg(i)} className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition ${activeImg === i ? "border-amber-500 shadow-md scale-105" : "border-gray-200 hover:border-gray-400"}`}>
                <img src={img} alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 35%" }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-10 sm:space-y-14">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Overview</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                {[{label:"Type",value:project.type},{label:"Price",value:project.price},{label:"Status",value:project.status},{label:"Possession",value:project.possession}].map(d=>(
                  <div key={d.label} className="bg-gray-50 rounded-xl p-4"><div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{d.label}</div><div className="text-sm font-bold text-gray-900">{d.value}</div></div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.amenities.map((a:string)=>(<div key={a} className="flex items-center gap-2.5 bg-amber-50 rounded-xl px-4 py-3"><svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg><span className="text-sm text-gray-700">{a}</span></div>))}
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Pricing</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm"><thead><tr className="bg-gray-900 text-white"><th className="text-left px-4 sm:px-6 py-3 rounded-tl-xl font-semibold">Configuration</th><th className="text-right px-4 sm:px-6 py-3 rounded-tr-xl font-semibold">Price*</th></tr></thead><tbody>
                  {project.pricing.map((p:{type:string;price:string},i:number)=>(<tr key={i} className="border-b border-gray-100"><td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-700">{p.type}</td><td className="px-4 sm:px-6 py-3 sm:py-4 text-right font-bold text-amber-600">{p.price}</td></tr>))}
                </tbody></table>
                <p className="text-xs text-gray-400 mt-2">*Prices are indicative and subject to change. GST &amp; registration charges extra.</p>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Floor Plans</h2>
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center border-2 border-dashed border-gray-200">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/></svg>
                <p className="text-gray-400 text-sm">Floor plans available on request</p>
                <a href="tel:+919876543210" className="inline-block mt-3 text-amber-500 font-semibold text-sm hover:underline">Call us for details →</a>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Location</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg"><iframe src={project.map} width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
            </div>
          </div>
          <div>
            <div className="sticky top-24 bg-white border border-gray-100 rounded-2xl shadow-xl p-5 sm:p-7">
              <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Interested?</h3>
              <p className="text-gray-500 text-sm mb-5">Get pricing &amp; availability details</p>
              <form onSubmit={e=>{e.preventDefault();alert("Thank you! Our team will contact you shortly.");setForm({name:"",phone:"",email:""});}} className="space-y-3">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm"/>
                <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm"/>
                <input type="email" placeholder="Email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition text-sm"/>
                <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold text-sm transition shadow-lg shadow-amber-500/25">Get Details</button>
              </form>
              <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition text-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>+91 98765 43210</a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition-all"><svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
    </main>
  );
}
