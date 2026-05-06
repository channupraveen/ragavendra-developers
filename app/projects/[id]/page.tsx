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
  "rv-arcade": {
    name: "RV Arcade", location: "Medchal, Hyderabad", price: "₹45L – ₹72L", type: "2 & 3 BHK Apartments", status: "Completed", possession: "Ready to Move",
    description: "RV Arcade is a premium completed residential project in the heart of Medchal offering thoughtfully designed 2 & 3 BHK apartments with modern amenities and excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/RV arcade/img1.jpeg","/images/projects/RV arcade/img2.jpeg"],
    amenities: ["Parking","Children's Play Area","24/7 Security","Power Backup","CCTV Surveillance","Intercom Facility","Rain Water Harvesting","Landscaped Gardens"],
    pricing: [{ type: "2 BHK – 1464 sqft", price: "₹60,00,000" }, { type: "3 BHK – 1768 sqft", price: "₹72,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "rv-residency": {
    name: "RV Residency", location: "Medchal, Hyderabad", price: "₹45L – ₹75L", type: "2 & 3 BHK Apartments", status: "Completed", possession: "Ready to Move",
    description: "RV Residency is a premium residential project in Medchal offering spacious 2 & 3 BHK apartments with modern amenities, quality construction, and excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/rv resedenecy/img1.jpeg"],
    amenities: ["Parking","Children's Play Area","24/7 Security","Power Backup","CCTV Surveillance","Intercom Facility","Rain Water Harvesting","Landscaped Gardens"],
    pricing: [{ type: "2 BHK – 1200 sqft", price: "₹45,00,000" }, { type: "3 BHK – 1650 sqft", price: "₹75,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "lakshmi-nilayam": {
    name: "Lakshmi Nilayam", location: "Medchal, Hyderabad", price: "₹35L – ₹50L", type: "2 BHK Apartments", status: "Completed", possession: "Ready to Move",
    description: "Lakshmi Nilayam is a completed residential project in Medchal offering well-designed 2 BHK apartments with quality construction, modern amenities, and great connectivity to ORR and Kompally.",
    images: ["/images/projects/lakshminilyam/img1.jpeg","/images/projects/lakshminilyam/img2.jpeg","/images/projects/lakshminilyam/img3.jpeg"],
    amenities: ["Parking","Children's Play Area","24/7 Security","Power Backup","CCTV Surveillance","Intercom Facility","Rain Water Harvesting","Landscaped Gardens"],
    pricing: [{ type: "2 BHK – 1050 sqft", price: "₹35,00,000" }, { type: "2 BHK – 1200 sqft", price: "₹42,00,000" }, { type: "2 BHK – 1350 sqft", price: "₹50,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "my-home-duplex": {
    name: "My Home Luxury Duplex", location: "KLR NJR Colony, Hyderabad", price: "₹1.8Cr – ₹2.5Cr", type: "Luxury Duplex House", status: "Completed", possession: "Ready to Move",
    description: "My Home Luxury Duplex is a premium fully furnished duplex house in the prestigious KLR NJR Colony. Featuring spacious living areas, modern interiors, and top-of-the-line fittings across two elegant floors.",
    images: ["/images/projects/myhome/img1.jpeg"],
    amenities: ["Fully Furnished","Modular Kitchen","Premium Flooring","Parking","24/7 Security","Power Backup","CCTV Surveillance","Landscaped Gardens","Rain Water Harvesting","Vastu Compliant"],
    pricing: [{ type: "Duplex – 2800 sqft", price: "₹1,80,00,000" }, { type: "Duplex – 3200 sqft", price: "₹2,10,00,000" }, { type: "Duplex – 3600 sqft", price: "₹2,50,00,000" }],
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
  "sheesa-nilayam": {
    name: "Sheesa Nilayam", location: "Medchal, Hyderabad", price: "₹2Cr", type: "G+2 Luxury – 1, 2 & 3 BHK", status: "Completed", possession: "Ready to Move",
    description: "Sheesa Nilayam is a luxury G+2 independent property in Medchal featuring spacious 1 BHK, 2 BHK, and 3 BHK units across three elegant floors. The entire project is valued at ₹2 Crores with premium construction and modern finishes.",
    images: ["/images/projects/sheesainilayam/img1.png","/images/projects/sheesainilayam/img2.png"],
    amenities: ["Parking","Premium Flooring","Modular Kitchen","24/7 Security","Power Backup","CCTV Surveillance","Rain Water Harvesting","Vastu Compliant","Landscaped Gardens","Intercom Facility"],
    pricing: [{ type: "1 BHK – 650 sqft", price: "₹28,00,000" }, { type: "2 BHK – 1100 sqft", price: "₹52,00,000" }, { type: "3 BHK – 1650 sqft", price: "₹78,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "ragavendra-homes": {
    name: "Ragavendra Homes", location: "Medchal, Hyderabad", price: "₹65L – ₹85L", type: "3 BHK Apartments", status: "Completed", possession: "Ready to Move",
    description: "Ragavendra Homes is a premium residential project in Medchal offering spacious 3 BHK apartments with quality construction, modern amenities, and excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/ragavendra homes/img1.jpeg","/images/projects/ragavendra homes/img2.jpeg"],
    amenities: ["Parking","Children's Play Area","24/7 Security","Power Backup","CCTV Surveillance","Intercom Facility","Rain Water Harvesting","Landscaped Gardens"],
    pricing: [{ type: "3 BHK – 1550 sqft", price: "₹65,00,000" }, { type: "3 BHK – 1800 sqft", price: "₹85,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "independent-house": {
    name: "G+1 Independent House", location: "Medchal, Hyderabad", price: "₹75L", type: "G+1 Independent House", status: "Completed", possession: "Ready to Move",
    description: "A beautifully constructed G+1 independent house in Medchal offering spacious living across two floors with quality construction, modern finishes, and excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/independenthouse/img1.jpeg"],
    amenities: ["Parking","Vastu Compliant","24/7 Security","Power Backup","Rain Water Harvesting","Premium Flooring","Landscaped Gardens","CCTV Surveillance"],
    pricing: [{ type: "G+1 Independent House", price: "₹75,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "independent-house-g2": {
    name: "G+2 Independent House", location: "Medchal, Hyderabad", price: "₹90L", type: "G+2 Independent House", status: "Completed", possession: "Ready to Move",
    description: "A premium G+2 independent house in Medchal offering spacious living across three floors with quality construction, modern finishes, and excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/inde g+2/img1.jpeg","/images/projects/inde g+2/img2.jpeg"],
    amenities: ["Parking","Vastu Compliant","24/7 Security","Power Backup","Rain Water Harvesting","Premium Flooring","Landscaped Gardens","CCTV Surveillance"],
    pricing: [{ type: "G+2 Independent House", price: "₹90,00,000" }],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30436.0!2d78.4983!3d17.6299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8543a820475b%3A0x3e2e4e7a3e55cd46!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  "single-independent-house": {
    name: "G+1 Independent House", location: "Medchal, Hyderabad", price: "₹70L", type: "G+1 Independent House", status: "Completed", possession: "Ready to Move",
    description: "A well-constructed single G+1 independent house in Medchal offering comfortable living across two floors with modern finishes, quality construction, and excellent connectivity to ORR, Kompally, and major IT corridors.",
    images: ["/images/projects/singlehouse/img1.jpeg"],
    amenities: ["Parking","Vastu Compliant","24/7 Security","Power Backup","Rain Water Harvesting","Premium Flooring","Landscaped Gardens","CCTV Surveillance"],
    pricing: [{ type: "G+1 Independent House", price: "₹70,00,000" }],
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

      {/* Main Image with swipe */}
      <section className="relative bg-gray-900">
        <div
          className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] touch-pan-y"
          onTouchStart={e => { (window as any).__touchX = e.touches[0].clientX; }}
          onTouchEnd={e => {
            const diff = (window as any).__touchX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
              setActiveImg(prev => diff > 0 ? Math.min(prev + 1, project.images.length - 1) : Math.max(prev - 1, 0));
            }
          }}
        >
          <img src={project.images[activeImg]} alt={project.name} className="w-full h-full object-cover md:object-contain transition-all duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-4 sm:left-8 z-10">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 ${project.status === "Ongoing" ? "bg-green-500" : project.status === "Completed" ? "bg-blue-500" : "bg-orange-500"}`}>{project.status}</span>
          <h1 className="text-lg sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{project.name}</h1>
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
                <a href="tel:+919849013465" className="inline-block mt-3 text-amber-500 font-semibold text-sm hover:underline">Call us for details →</a>
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
                <a href="tel:+919849013465" className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition text-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>+91 98490 13465</a>
                <a href="https://wa.me/919849013465" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition text-sm"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER PROJECTS */}
      <section className="bg-gray-50 py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-amber-500 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Explore More</span>
            <h2 className="text-2xl sm:text-4xl font-bold mt-3 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Other Projects</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(projectsData).filter(([key]) => key !== slug).slice(0, 3).map(([key, p]) => (
              <Link key={key} href={`/projects/${key}`} className="group block bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3"><span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${p.status === "Ongoing" ? "bg-green-500" : p.status === "Completed" ? "bg-blue-500" : "bg-orange-500"}`}>{p.status}</span></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {p.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-amber-600 font-bold">{p.price}</div>
                      <div className="text-gray-400 text-xs">{p.type}</div>
                    </div>
                    <span className="text-amber-500 group-hover:translate-x-1 transition-transform text-sm font-semibold flex items-center gap-1">
                      Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-14">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold transition shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5">
              View All Projects <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <a href="https://wa.me/919849013465" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-xl hover:scale-110 transition-all"><svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
    </main>
  );
}