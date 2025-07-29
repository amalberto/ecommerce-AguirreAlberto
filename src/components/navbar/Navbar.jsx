import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { FaBars, FaTimes, FaGem } from "react-icons/fa";  // Importamos el logo
import { CartWidget } from "../cartWidget/CartWidget";

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 text-white px-6 py-4 shadow-md">
      {({ open }) => (
        <>
          <div className="flex justify-between items-center">
            {/* Logo de ejemplo + nombre */}
            <div className="flex items-center gap-3">
              <FaGem className="text-yellow-400 text-3xl" />
              <h1 className="text-xl font-bold tracking-wide">Aguirre A - Preentrega1</h1>
            </div>

            {/* Botón hamburguesa en vista mobile */}
            <DisclosureButton className="md:hidden text-2xl focus:outline-none">
              {open ? <FaTimes /> : <FaBars />}
            </DisclosureButton>

            {/* Menú de links en vista desktop */}
            <ul className="hidden md:flex gap-8 text-lg">
              <li className="hover:text-gray-300 transition cursor-pointer">Inicio</li>
              <li className="hover:text-gray-300 transition cursor-pointer">Productos</li>
              <li className="hover:text-gray-300 transition cursor-pointer">Contacto</li>
            </ul>

            {/* Widget del carrito */}
            <CartWidget />
          </div>

          {/* Menú desplegable para vista mobile */}
          <DisclosurePanel className="md:hidden mt-4">
            <ul className="flex flex-col items-center gap-4 bg-gray-700 py-4 text-lg">
              <li className="hover:text-gray-300 cursor-pointer">Inicio</li>
              <li className="hover:text-gray-300 cursor-pointer">Productos</li>
              <li className="hover:text-gray-300 cursor-pointer">Contacto</li>
            </ul>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
