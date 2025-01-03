"use client";

import { ArrowRight, Pizza } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Pizza Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <Pizza className="w-16 h-16 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            Pizzaria Lugano
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Authentic Italian Pizza in the Heart of Chaves
          </p>
          <Link
            href="/menu"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            View Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
                alt: "Margherita Pizza",
                title: "Classic Margherita"
              },
              {
                src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5",
                alt: "Pepperoni Pizza",
                title: "Spicy Pepperoni"
              },
              {
                src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
                alt: "Special Pizza",
                title: "Chef's Special"
              }
            ].map((item, index) => (
              <div key={index} className="relative h-72 group overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}