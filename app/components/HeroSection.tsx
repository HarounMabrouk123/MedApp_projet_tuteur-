'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="text-center py-24 px-4 max-w-3xl mx-auto">
      {/* Animate container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          Medical Image Analysis Platform
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        className="text-xl text-gray-700 mb-12"
      >
        AI-powered radiological image analysis for healthcare professionals.
        Upload medical images and receive instant diagnostic reports.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <a
          href="/analysis"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Analysis
        </a>
      </motion.div>
    </section>
  );
}
