import { useEffect, useState } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const obtenerProductos = categoriaId 
      ? getProductosPorCategoria(categoriaId)
      : getProductos();

    obtenerProductos
      .then((respuesta) => {
        setProductos(respuesta);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [categoriaId]);

  const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };

  const titulo = categoriaId 
    ? `${mensaje} - ${capitalizarPrimeraLetra(categoriaId)}`
    : mensaje;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        {titulo}
      </h2>
      
      {categoriaId && (
        <nav className="mb-6 text-sm breadcrumbs">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="text-blue-600 hover:text-blue-800">Inicio</a>
              <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.476 239.03c9.373 9.372 9.373 24.568 0 33.941z"/>
              </svg>
            </li>
            <li>
              <span className="text-gray-500">{capitalizarPrimeraLetra(categoriaId)}</span>
            </li>
          </ol>
        </nav>
      )}
      
      {loading ? (
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          <p className="text-lg mt-4 text-gray-600">Cargando productos...</p>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
      
      {!loading && productos.length === 0 && (
        <div className="text-center">
          <p className="text-lg text-gray-500">No se encontraron productos.</p>
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
