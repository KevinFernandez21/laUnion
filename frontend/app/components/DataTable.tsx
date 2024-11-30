
export default function DataTable() {
    // Datos de ejemplo, normalmente vendrían del backend o algún estado
    const data = [
      { id: 1, name: "Juan", age: 25 },
      { id: 2, name: "Maria", age: 30 },
      { id: 3, name: "Pedro", age: 28 }
    ];
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Nombre</th>
              <th className="px-4 py-2 text-left">Edad</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  