// src/pages/NotFound.jsx   ← ONLY edit this file

import { Link } from 'react-router-dom';

export default function NotFound() {   // ← Just add "default" here
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-3xl font-semibold text-gray-700 mt-4">Page Not Found</p>
        <p className="text-gray-600 mt-2 mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}