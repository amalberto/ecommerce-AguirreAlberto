import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contacto
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Información de contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">contacto@tiendaaguirre.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaPhone className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Teléfono</p>
                  <p className="text-gray-600">+54 11 1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">Dirección</p>
                  <p className="text-gray-600">Av. Corrientes 1234, CABA, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaGithub className="text-blue-600 text-xl mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">GitHub</p>
                  <p className="text-gray-600">github.com/aguirre-alberto</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Horarios de atención
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">Lunes a Viernes:</span>
                <span className="text-gray-600">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">Sábados:</span>
                <span className="text-gray-600">9:00 - 13:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-800">Domingos:</span>
                <span className="text-gray-600">Cerrado</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Sobre nosotros
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tienda especializada en componentes de computación y gaming. 
                Ofrecemos productos de alta calidad con la mejor atención al cliente. 
                Nuestro objetivo es brindarte la mejor experiencia de compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
