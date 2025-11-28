import { FileText } from 'lucide-react';

interface DocumentPreviewProps {
  imageUrl: string | null;
}

export default function DocumentPreview({ imageUrl }: DocumentPreviewProps) {
  return (
    <section className="bg-white rounded-lg border border-gray-300 p-6 w-full max-w-full">
      {/* Title & subtitle */}
      <h2 className="font-semibold text-lg mb-1 text-black">Radiological Image Preview</h2>
      {!imageUrl && (
        <p className="text-sm text-gray-500 mb-4">No image uploaded</p>
      )}

      {/* Preview box */}
      <div
        className={`border-2 ${
          imageUrl ? 'border-gray-300' : 'border-dashed border-gray-400'
        } rounded-md min-h-[180px] flex flex-col justify-center items-center p-8 text-gray-500`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Radiological Image Preview"
            className="max-w-full max-h-[480px] object-contain rounded"
          />
        ) : (
          <>
            <FileText className="w-10 h-10 mb-2" />
            <p className="select-none">Radiological image preview will appear here</p>
          </>
        )}
      </div>
    </section>
  );
}
