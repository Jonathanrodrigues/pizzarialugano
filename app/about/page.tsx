"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { getInfo, getFormattedAddress } from "@/lib/data";

export default function About() {
  const { contact, hours } = getInfo();
  const formattedAddress = getFormattedAddress(contact);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Contact & Location</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <div className="text-gray-600">
                  {formattedAddress.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">{contact.email}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-gray-600">
                {Object.entries(hours).map(([day, time]) => (
                  <p key={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}: {time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Lugano%20Pizzaria%2C%20EDF%20Mestre%20de%20Avis%2C%20Av.%20Nuno%20%C3%81lvares%20loja%206%2C%205400-419%20Chaves&zoom=10&maptype=roadmap"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

