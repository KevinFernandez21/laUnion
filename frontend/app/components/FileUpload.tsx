
import React, { useState } from 'react';

const FileUpload = ({ onFileSelect }: { onFileSelect: (files: File[]) => void }) => {
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragging(true);
    } else if (e.type === 'dragleave' || e.type === 'drop') {
      setDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    onFileSelect(files); // Pasa los archivos al manejador
    setDragging(false);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    onFileSelect(files); // Pasa los archivos al manejador
  };

  return (
    <div
      className={`border-2 p-4 rounded-lg ${dragging ? 'border-blue-500' : 'border-gray-300'} border-dashed`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <h2 className="text-center text-xl">Arrastra y suelta tus archivos PDF aquí</h2>
      <input
        type="file"
        accept="application/pdf"
        multiple
        className="hidden"
        id="fileInput"
        onChange={handleFileSelect}
      />
      <label htmlFor="fileInput" className="mt-2 text-center block text-blue-500 cursor-pointer">
        O haz clic para seleccionar los archivos
      </label>
    </div>
  );
};

export default FileUpload;
