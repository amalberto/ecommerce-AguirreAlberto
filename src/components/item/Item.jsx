import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, stock, descripcion }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <img 
        src={img} 
        alt={nombre}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
        }}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{nombre}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{descripcion}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-green-600">${precio}</p>
          <span className="text-sm text-gray-500">Stock: {stock}</span>
        </div>
        <Link 
          to={`/item/${id}`}
          className="block w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
