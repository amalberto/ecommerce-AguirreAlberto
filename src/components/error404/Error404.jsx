import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-500 mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            <FaHome className="mr-2" />
            Volver al inicio
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold"
          >
            Volver atrás
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-400">
          <p>Error 404 - Página no encontrada</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
