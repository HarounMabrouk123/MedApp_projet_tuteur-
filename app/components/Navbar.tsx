'use client';

import Link from 'next/link';
import { ArrowLeft, Stethoscope } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onStartOver?: () => void;
  disableStartOver?: boolean;
}

export default function Navbar({ onStartOver, disableStartOver = false }: NavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (isHomePage) {
    // === Home Page Navbar ===
    return (
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Medical SVG Logo */}
          <Stethoscope className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900 select-none">
            MedicalAI
          </span>
        </Link>

        {/* Navigation Links & Get Started button aligned right */}
        <div className="flex items-center space-x-8 font-medium text-gray-700">
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
            How It Works
          </a>
          <Link
            href="/analysis"
            className="bg-blue-600 text-white rounded-md px-6 py-2 font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>
    );
  }

  // === Analysis Page Navbar ===
  return (
    <nav className="w-full flex justify-between items-center bg-white border-b border-gray-200 px-11 py-4 shadow-sm rounded-none fixed top-0 left-0 z-50">
      <div className="flex items-center gap-3">
        <Link href="/" className="inline-flex items-center gap-1 text-gray-700 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-normal">Back to Home</span>
        </Link>

        <Stethoscope className="w-5 h-5 text-blue-600" />
        <span className="font-semibold text-base text-gray-900 select-none">
          Medical Image Analyzer
        </span>
      </div>

      <button
        onClick={onStartOver}
        disabled={disableStartOver}
        className={`border rounded px-4 py-1 text-sm font-normal
          ${disableStartOver ? 'text-gray-400 border-gray-300 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-100'}
        `}
      >
        Start Over
      </button>
    </nav>
  );
}
