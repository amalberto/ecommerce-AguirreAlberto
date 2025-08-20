import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getCategorias } from "../../asyncmock";
import ItemListContainer from "../itemListContainer/ItemListContainer";

const CategoriaValidator = ({ mensaje }) => {
  const [categoriasValidas, setCategoriasValidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    getCategorias()
      .then((categorias) => {
        setCategoriasValidas(categorias);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar categorías:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        <p className="text-lg mt-4 text-gray-600">Verificando categoría...</p>
      </div>
    );
  }

  if (!categoriasValidas.includes(categoriaId)) {
    return <Navigate to="/404" replace />;
  }

  return <ItemListContainer mensaje={mensaje} />;
};

export default CategoriaValidator;
