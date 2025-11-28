'use client';


import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import ImageUpload from '../components/ImageUpload';
import DocumentPreview from '../components/DocumentPreview';

export default function AnalysisPage() {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!file) {
      setImagePreview(null);
      setProgress(0);
      setIsProcessing(false);
      return;
    }
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setImagePreview(url);

    // Simulate progress
    setProgress(0);
    setIsProcessing(true);
    let progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(progressInterval);
          setIsProcessing(false);
          return 100;
        }
        return oldProgress + 10;
      });
    }, 300);

    return () => {
      URL.revokeObjectURL(url);
      clearInterval(progressInterval);
    };
  }, [file]);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  const handleStartOver = () => {
    setFile(null);
    setProgress(0);
    setImagePreview(null);
    setIsProcessing(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-14"> {/* pt-14 approx height of navbar */}

      <Navbar onStartOver={handleStartOver} disableStartOver={!file} />

      <section className="max-w-7xl mx-auto p-6">
        <ProgressBar progress={progress} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DocumentPreview imageUrl={imagePreview} />

          <div className="bg-white rounded-md p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-1 text-black">Upload Radiological Image</h2>
            <p className="text-sm text-gray-500 mb-4">
              Upload your medical image in PNG, JPEG, or DICOM format (max 10MB)
            </p>
            <ImageUpload onFileSelect={handleFileSelect} />

            <div className="mt-4 text-sm text-gray-600">
              Supported formats:
              <ul className="list-disc list-inside">
                <li>PDF documents (.pdf)</li>
                <li>PNG images (.png)</li>
                <li>JPEG images (.jpg, .jpeg)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
