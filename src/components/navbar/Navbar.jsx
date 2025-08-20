import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FaBars, FaTimes, FaGem } from "react-icons/fa";
import CartWidget from "../cartWidget/CartWidget";
import { useEffect, useState } from "react";
import { getCategorias } from "../../asyncmock";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  console.log('Ruta actual:', location.pathname);

  useEffect(() => {
    getCategorias()
      .then((categoriasObtenidas) => {
        setCategorias(categoriasObtenidas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar categorías:", error);
        setLoading(false);
      });
  }, []);

  const capitalizarPrimeraLetra = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 text-white px-6 py-4 shadow-md">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <FaGem className="text-yellow-400 text-3xl animate-pulse" />
              <NavLink to="/" className="text-xl font-bold tracking-wide hover:text-yellow-400 transition-colors duration-300">
                Aguirre A - Preentrega2
              </NavLink>
            </div>

            <DisclosureButton className="md:hidden text-2xl focus:outline-none">
              {open ? <FaTimes /> : <FaBars />}
            </DisclosureButton>

            <ul className="hidden md:flex gap-8 text-lg">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                      isActive ? 'text-yellow-400 font-bold border-b-2 border-yellow-400' : ''
                    }`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              {loading ? (
                <li className="text-gray-400 animate-pulse">Cargando...</li>
              ) : (
                categorias.map((categoria) => (
                  <li key={categoria}>
                    <NavLink 
                      to={`/categoria/${categoria}`}
                      className={({ isActive }) => 
                        `hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                          isActive ? 'text-yellow-400 font-bold border-b-2 border-yellow-400' : ''
                        }`
                      }
                    >
                      {capitalizarPrimeraLetra(categoria)}
                    </NavLink>
                  </li>
                ))
              )}
              <li>
                <NavLink 
                  to="/contacto" 
                  className={({ isActive }) => 
                    `hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                      isActive ? 'text-yellow-400 font-bold border-b-2 border-yellow-400' : ''
                    }`
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>

            <CartWidget />
          </div>

          <DisclosurePanel className="md:hidden mt-4 animate-slide-down">
            <ul className="flex flex-col items-center gap-4 bg-gray-700 py-4 text-lg rounded-lg shadow-lg">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                      isActive ? 'text-yellow-400 font-bold' : ''
                    }`
                  }
                >
                  Inicio
                </NavLink>
              </li>
              {loading ? (
                <li className="text-gray-400 animate-pulse">Cargando...</li>
              ) : (
                categorias.map((categoria) => (
                  <li key={categoria}>
                    <NavLink 
                      to={`/categoria/${categoria}`}
                      className={({ isActive }) => 
                        `hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                          isActive ? 'text-yellow-400 font-bold' : ''
                        }`
                      }
                    >
                      {capitalizarPrimeraLetra(categoria)}
                    </NavLink>
                  </li>
                ))
              )}
              <li>
                <NavLink 
                  to="/contacto" 
                  className={({ isActive }) => 
                    `hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 ${
                      isActive ? 'text-yellow-400 font-bold' : ''
                    }`
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
