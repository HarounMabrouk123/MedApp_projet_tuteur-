'use client';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  bgColor = 'bg-white',
  iconColor = 'text-blue-600'
}: FeatureCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow-sm border border-gray-100`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconColor} bg-opacity-10`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
