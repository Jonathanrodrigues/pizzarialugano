"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";
import { getMenuData } from "@/lib/data";
import type { MenuData } from "@/lib/data";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("pizzas");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems: MenuData = getMenuData();

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full px-4 py-2 bg-white rounded-lg shadow flex items-center justify-between"
          >
            <span className="text-gray-600">
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            </span>
            <MenuIcon className="w-5 h-5 text-gray-600" />
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute z-50 mt-2 w-[calc(100%-2rem)] bg-white rounded-lg shadow-lg">
              {Object.keys(menuItems).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Category Filters */}
        <div className="hidden md:flex justify-center gap-4 mb-12">
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
          {menuItems[activeCategory]?.map((item, index) => (
            <Link
              key={index}
              href={`/menu/${activeCategory}/${encodeURIComponent(item.number)}`}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  {item.category && (
                    <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}