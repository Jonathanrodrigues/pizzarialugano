"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const menuItems = {
  pizzas: [
    {
      name: "Margherita",
      description: "Fresh tomato sauce, mozzarella, and basil",
      price: "€10.90",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
    },
    {
      name: "Pepperoni",
      description: "Tomato sauce, mozzarella, and spicy pepperoni",
      price: "€12.90",
      image: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5"
    },
    {
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesan, and gouda",
      price: "€13.90",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    }
  ],
  pasta: [
    {
      name: "Spaghetti Carbonara",
      description: "Creamy sauce with pancetta and pecorino",
      price: "€11.90",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3"
    }
  ],
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee and mascarpone",
      price: "€5.90",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9"
    }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("pizzas");

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-red-600 font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}