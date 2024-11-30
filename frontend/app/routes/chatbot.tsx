import { useState } from "react";
//import Navbar from '../components/Navbar';
export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, input]);
    setInput("");

    // Aquí podrás agregar la lógica para enviar el mensaje al backend
  };

  return (
    <div className="container mx-auto p-4">

      
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
      <div className="border p-4 h-80 overflow-y-scroll">
        {messages.map((message, index) => (
          <div key={index} className="mb-2 p-2 bg-gray-100 rounded-lg">
            {message}
          </div>
        ))}
      </div>
      <input
        type="text"
        className="border p-2 mt-4 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button
        className="bg-blue-500 text-white p-2 mt-2 w-full"
        onClick={handleSendMessage}
      >
        Enviar
      </button>
    </div>
  );
}
