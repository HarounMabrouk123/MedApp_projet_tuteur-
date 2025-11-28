'use client';

import { useRef } from 'react';
import { Activity, Layers, FileText } from 'lucide-react';
import { motion, Variants, useInView } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 14 } },
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
}

function FeatureCard({ icon, title, description, bgColor = 'bg-white', iconColor = 'text-blue-600' }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={`${bgColor} p-6 rounded-xl shadow-sm border border-gray-100 text-center`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconColor} bg-opacity-10`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // trigger a bit before fully visible

  return (
    <motion.section
      id="features"
      ref={ref}
      className="mt-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <FeatureCard
        icon={<Activity className="w-6 h-6" />}
        bgColor="bg-white"
        iconColor="text-blue-600"
        title="Disease Classification"
        description="Advanced AI algorithms analyze radiological images to accurately detect a wide range of diseases, providing quick and reliable support for medical diagnosis."
      />

      <FeatureCard
        icon={<Layers className="w-6 h-6" />}
        bgColor="bg-white"
        iconColor="text-green-600"
        title="Segmentation"
        description="Precise mask generation technology isolates critical regions in medical scans, allowing for enhanced visualization and targeted treatment planning."
      />

      <FeatureCard
        icon={<FileText className="w-6 h-6" />}
        bgColor="bg-white"
        iconColor="text-purple-600"
        title="Medical Assistance"
        description="Generates detailed, easy-to-understand medical reports and descriptions that assist healthcare professionals in interpreting complex imaging data."
      />
    </motion.section>
  );
}
