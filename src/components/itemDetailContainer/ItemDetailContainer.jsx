import { useEffect, useState } from "react";
import { getProductoPorId } from "../../asyncmock";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    getProductoPorId(parseInt(itemId))
      .then((respuesta) => {
        if (respuesta) {
          setProducto(respuesta);
        } else {
          setError("Producto no encontrado");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setError("Error al cargar el producto");
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <p className="text-lg mt-4 text-gray-600">Cargando detalle del producto...</p>
        </div>
      ) : error ? (
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="text-lg font-semibold">Error</p>
            <p>{error}</p>
          </div>
        </div>
      ) : producto ? (
        <ItemDetail 
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          img={producto.img}
          stock={producto.stock}
          descripcion={producto.descripcion}
          categoria={producto.categoria}
        />
      ) : null}
    </div>
  );
};

export default ItemDetailContainer;
