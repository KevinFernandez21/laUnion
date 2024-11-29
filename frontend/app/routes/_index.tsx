import type { MetaFunction } from "@remix-run/node";
import {Link,Outlet} from "@remix-run/react";
import FileUpload from "./FileUpload";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subir Datos</h1>
      <FileUpload />
      <div className="mt-4">
        <Link to="/view-data" className="text-blue-500 hover:underline">
          Ver tabla de datos
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/chatbot" className="text-blue-500 hover:underline">
          Ir al Chatbot
        </Link>
      </div>
    </div>
  );
}

                                                                  
