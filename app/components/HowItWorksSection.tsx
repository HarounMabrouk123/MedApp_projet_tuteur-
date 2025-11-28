'use client';

import { UploadCloud, Cpu, FileText } from 'lucide-react';

const steps = [
  {
    title: 'Upload Image',
    description:
      'Easily upload your radiological images in supported formats like PNG, JPEG, or DICOM.',
    icon: UploadCloud,
    iconColor: 'text-blue-600',
  },
  {
    title: 'AI Processing',
    description:
      'Our advanced AI models analyze images to detect diseases, generate masks, and produce detailed reports.',
    icon: Cpu,
    iconColor: 'text-green-600',
  },
  {
    title: 'Get Report',
    description:
      'Receive comprehensive, easy-to-understand medical reports instantly, ready for review or download.',
    icon: FileText,
    iconColor: 'text-purple-600',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="max-w-7xl mx-auto px-8 py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-sm mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative">
        {steps.map(({ title, description, icon: Icon, iconColor }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center max-w-xs md:max-w-sm relative"
          >
            <div
              className={`flex items-center justify-center rounded-full w-16 h-16 mb-6 shadow-md bg-white ${iconColor}`}
            >
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>

            {/* Connector line for desktop - use flex grow */}
            {idx < steps.length - 1 && (
              <div
                className={`hidden md:block absolute top-1/2 left-full h-0.5 bg-blue-300`}
                style={{
                  width: '3rem',
                  transform: 'translateY(-50%)',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
