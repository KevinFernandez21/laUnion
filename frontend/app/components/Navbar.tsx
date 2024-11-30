import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            laUnion
          </Link>
        </h1>
        <div className="space-x-4">
          <Link to="/FileUpload" className="hover:text-gray-300">
            Subir Datos
          </Link>
          <Link to="/view-data" className="hover:text-gray-300">
            Ver Datos
          </Link>
          <Link to="/chatbot" className="hover:text-gray-300">
            Chatbot
          </Link>
        </div>
      </div>
    </nav>
  );
}
