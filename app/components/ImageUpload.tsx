'use client';

interface ImageUploadProps {
  onFileSelect: (file: File) => void;
}

export default function ImageUpload({ onFileSelect }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="border-dashed border-2 border-blue-300 rounded-md p-12 text-center cursor-pointer hover:border-blue-500 transition-colors">
      <label htmlFor="file-upload" className="cursor-pointer block select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-3 h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M8 12l4-4 4 4M12 16V8" />
        </svg>
        <div className="mb-1 font-semibold text-blue-600">
          Drag and drop your medical image here, or click to browse
        </div>
        <button
          type="button"
          className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 focus:outline-none"
        >
          Choose Medical Image
        </button>
      </label>
      <input
        type="file"
        id="file-upload"
        accept="image/png,image/jpeg,image/dicom"
        className="hidden"
        onChange={handleFileChange}
      />
      <p className="mt-3 text-xs text-gray-500">
        Supported formats: PNG, JPEG, DICOM (max 10MB)
      </p>
    </div>
  );
}
