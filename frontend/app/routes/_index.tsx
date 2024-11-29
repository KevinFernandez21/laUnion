import type { MetaFunction } from "@remix-run/node";
import {useState} from "react";
//import {Link} from "@remix-run/react";
import FileUpload from "../components/FileUpload";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileSelect = (newfiles: File[]) => {
    setFiles(newfiles);
    console.log(newfiles);
  };
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Sube tus Archivos PDF</h1>
      <p className="text-center mt-2">Puedes cargar tu hoja de contexto y las encuestas en formato PDF.</p>

      <div className="mt-6">
        <h2 className="text-lg font-medium">Hoja de Contexto (un solo PDF)</h2>
        <FileUpload onFileSelect={handleFileSelect} />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium">Encuestas (múltiples PDFs)</h2>
        <FileUpload onFileSelect={handleFileSelect} />
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium">Archivos seleccionados:</h3>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

                                                                  
