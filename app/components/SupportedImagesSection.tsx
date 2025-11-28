'use client';

export default function SupportedImagesSection() {
  const imageTypes = ['X-Ray', 'CT Scan', 'MRI', 'Ultrasound'];

  return (
    <div className="mt-20 max-w-3xl mx-auto bg-blue-50 p-8 rounded-xl px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Supported Image Types</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageTypes.map((type) => (
          <div
            key={type}
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 font-semibold text-gray-700"
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}