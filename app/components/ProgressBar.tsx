interface ProgressBarProps {
  progress: number;  // 0 to 100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="border rounded-md p-4 mb-6 bg-white shadow-sm">
      <div className="font-semibold mb-2 text-black">Processing Progress</div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-200">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right text-sm text-gray-600 mt-1">{progress}%</div>
    </div>
  );
}
