import type { MetaFunction } from "@remix-run/node";
import {Outlet} from "@remix-run/react";
import FileUpload from "./FileUpload";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <FileUpload />
      <Outlet />
    </div>
  );
}

                                                                  
