"use client";

import { Pizza } from "lucide-react";
import Image from "next/image";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Pizza className="w-12 h-12 mx-auto mb-6 text-red-600" />
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Since 1985, Pizzaria Lugano has been serving authentic Italian pizza in the heart of Chaves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498"
              alt="Old Pizzaria"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">A Family Tradition</h2>
            <p className="text-gray-600 mb-4">
              Founded by Giuseppe Lugano, who brought his family's secret recipes from Naples to Portugal,
              our pizzeria has been a cornerstone of the Chaves community for over three decades.
            </p>
            <p className="text-gray-600">
              Every pizza we make follows the traditional Neapolitan methods, using only the finest
              ingredients imported directly from Italy, combined with fresh local produce.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">35+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">20+</h3>
            <p className="text-gray-600">Pizza Varieties</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">50K+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on ingredients and preparation methods
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Tradition</h3>
              <p className="text-gray-600">
                Maintaining authentic Italian pizza-making techniques
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Being a cherished part of the Chaves community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}