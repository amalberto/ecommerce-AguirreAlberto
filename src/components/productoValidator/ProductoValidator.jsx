import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProductoPorId } from "../../asyncmock";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";

const ProductoValidator = () => {
  const [productoExiste, setProductoExiste] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const productoId = parseInt(itemId);
    
    if (isNaN(productoId)) {
      setProductoExiste(false);
      setLoading(false);
      return;
    }

    getProductoPorId(productoId)
      .then((producto) => {
        setProductoExiste(!!producto);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al verificar producto:", error);
        setProductoExiste(false);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <p className="text-lg mt-4 text-gray-600">Verificando producto...</p>
      </div>
    );
  }

  if (!productoExiste) {
    return <Navigate to="/404" replace />;
  }

  return <ItemDetailContainer />;
};

export default ProductoValidator;
