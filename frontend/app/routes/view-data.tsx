import DataTable from "../components/DataTable";

//import Navbar from '../components/Navbar';

export default function ViewData() {

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tabla de Datos</h1>
        <DataTable />  {/* Aquí usas el componente DataTable para mostrar los datos */}
      </div>
    </div>
  );
}
