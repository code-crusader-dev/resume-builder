export default function Home({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
      <h1 className="text-5xl font-bold mb-4">Resume Builder</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Create a professional, ATS-friendly resume in minutes.
      </p>
      <button
        onClick={onStart}
        className="px-10 py-3 bg-black text-white rounded hover:bg-gray-800"
      >
        Make Your Resume
      </button>
    </div>
  );
}
