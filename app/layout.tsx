import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Pizza } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pizzaria Lugano - Authentic Italian Pizza in Chaves',
  description: 'Traditional Italian pizzeria serving authentic Neapolitan pizza in Chaves, Portugal since 1985.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <Pizza className="w-6 h-6 text-red-600" />
                <span className="font-bold text-xl">Lugano</span>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link href="/menu" className="text-gray-600 hover:text-gray-900">Menu</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link href="/history" className="text-gray-600 hover:text-gray-900">History</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>Rua de Santo António, 28</p>
                <p>5400-219 Chaves</p>
                <p>+351 276 123 456</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Hours</h3>
                <p>Mon-Fri: 11:30 - 22:00</p>
                <p>Sat: 11:30 - 23:00</p>
                <p>Sun: 12:00 - 22:00</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-red-500">Facebook</a>
                  <a href="#" className="hover:text-red-500">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Pizzaria Lugano. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}