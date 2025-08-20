import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const manejarAgregarAlCarrito = () => {
    if (onAdd && contador > 0) {
      onAdd(contador);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-50 rounded-lg border">
      <div className="flex items-center space-x-4">
        <button 
          onClick={decrementar}
          disabled={contador <= 1}
          className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center font-bold text-lg"
          aria-label="Disminuir cantidad"
        >
          -
        </button>
        
        <span className="text-2xl font-bold text-gray-800 min-w-[3rem] text-center">
          {contador}
        </span>
        
        <button 
          onClick={incrementar}
          disabled={contador >= stock}
          className="w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center font-bold text-lg"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Stock disponible: <span className="font-semibold">{stock}</span>
        </p>
        {stock <= 5 && stock > 0 && (
          <p className="text-orange-600 text-xs font-medium mt-1">
            ¡Últimas unidades!
          </p>
        )}
        {stock === 0 && (
          <p className="text-red-600 text-xs font-medium mt-1">
            Sin stock disponible
          </p>
        )}
      </div>

      <button 
        onClick={manejarAgregarAlCarrito}
        disabled={stock === 0}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
      >
        {stock === 0 ? 'Sin stock' : `Agregar ${contador} al carrito`}
      </button>
    </div>
  );
};

export default ItemCount;
