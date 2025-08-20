import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion, categoria }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showCartConfirmation, setShowCartConfirmation] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(0);

  const manejarAgregarAlCarrito = (cantidad) => {
    const newItem = {
      id,
      nombre,
      precio,
      cantidad,
      total: precio * cantidad
    };
    
    setCartItems([...cartItems, newItem]);
    setAddedQuantity(cantidad);
    setShowCartConfirmation(true);
    console.log(`Agregado al carrito: ${cantidad} unidades de ${nombre}`);
  };

  const manejarTerminarCompra = () => {
    console.log("Finalizando compra...");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img 
            src={img} 
            alt={nombre}
            className="h-64 w-full object-cover md:h-full"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Imagen+no+disponible';
            }}
          />
        </div>
        
        <div className="p-8 md:w-1/2">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {categoria}
          </div>
          <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
            {nombre}
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            {descripcion}
          </p>
          
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-bold text-green-600">
                ${precio}
              </span>
              <div className="text-right">
                <p className="text-sm text-gray-500">Stock disponible</p>
                <p className="text-xl font-semibold text-gray-700">{stock} unidades</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-gray-500">ID: {id}</p>
          </div>
          
          <div className="mt-6">
            {!showCartConfirmation ? (
              <ItemCount 
                stock={stock}
                initial={1}
                onAdd={manejarAgregarAlCarrito}
              />
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ¡Producto agregado!
                </h3>
                <p className="text-green-700 mb-4">
                  {addedQuantity} {addedQuantity === 1 ? 'unidad' : 'unidades'} de {nombre} agregadas al carrito
                </p>
                
                <div className="space-y-3">
                  <button 
                    onClick={manejarTerminarCompra}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
                  >
                    Terminar compra
                  </button>
                  <button 
                    onClick={() => setShowCartConfirmation(false)}
                    className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
                  >
                    Seguir comprando
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6 space-y-3">
            <button 
              onClick={() => navigate(-1)}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold"
            >
              Volver
            </button>
            <Link 
              to={`/categoria/${categoria}`}
              className="block w-full bg-indigo-100 text-indigo-800 py-2 px-4 rounded-lg hover:bg-indigo-200 transition-colors duration-200 font-semibold text-center"
            >
              Ver más de {categoria}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
