"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useParams } from 'next/navigation'

import { ArrowLeft } from "lucide-react";
import { getMenuItem, getIngredients, formatPrice } from "@/lib/data";
import type { Ingredient } from "@/lib/data";
import { Checkbox } from "@/components/ui/checkbox";

export default function ItemDetail() {

    const params = useParams<{ category: string; item: string }>()

    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

    const category = params.category;
    const itemNumber = params.item;

    const item = getMenuItem(category, itemNumber);
    const ingredients = getIngredients();

    if (!item) {
        return <div>Item not found</div>;
    }

    const basePrice = parseFloat(item.price.replace("€", ""));
    const extraPrice = selectedIngredients.reduce((total, id) => {
        const ingredient = ingredients.find((i) => i.id === id);
        return total + (ingredient?.price || 0);
    }, 0);
    const totalPrice = basePrice + extraPrice;

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Menu
                </Link>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-[300px] md:h-[400px]">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold text-red-600">
                                    {formatPrice(totalPrice)}
                                </p>
                                {extraPrice > 0 && (
                                    <p className="text-sm text-gray-500">
                                        Base: {item.price} + Extras: {formatPrice(extraPrice)}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-4">Customize Your Order</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {ingredients.map((ingredient) => (
                                    <label
                                        key={ingredient.id}
                                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50"
                                    >
                                        <Checkbox
                                            checked={selectedIngredients.includes(ingredient.id)}
                                            onCheckedChange={(checked) => {
                                                setSelectedIngredients(
                                                    checked
                                                        ? [...selectedIngredients, ingredient.id]
                                                        : selectedIngredients.filter((id) => id !== ingredient.id)
                                                );
                                            }}
                                        />
                                        <div className="flex justify-between items-center flex-1">
                                            <span>{ingredient.name}</span>
                                            <span className="text-sm text-gray-600">
                                                +{formatPrice(ingredient.price)}
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}