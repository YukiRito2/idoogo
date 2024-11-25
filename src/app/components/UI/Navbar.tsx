import React, { useState } from "react";
import { FaRegUser, FaShoppingCart, FaHeadphonesAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import LogoId from "../../assets/LogoId.png"; // Importa la imagen del logo

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const categories = [
    "Laptops",
    "Componentes",
    "Computadoras",
    "Impresoras",
    "Accesorios",
    "Monitores",
    "Tablets",
    "Teléfonos",
    "Gaming",
    "Cámaras",
  ];

  return (
    <header className="h-[156px] flex flex-col font-mulish">
      {/* Barra superior */}
      <div className="bg-pink-primary text-white text-center py-2 text-sm font-bold">
        <span>OBTÉN ENVÍO GRATIS POR UNA COMPRA MAYOR A S/ 300</span>
      </div>

      {/* Barra principal */}
      <div className="bg-purple-primary h-[96px] flex items-center justify-center">
        <div className="max-w-screen-2xl w-full px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={LogoId}
                alt="IDOOGO Logo"
                className="h-10 hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Barra de búsqueda */}
          <div className="flex items-center bg-white border-2 border-purple-primary rounded-lg overflow-hidden w-[60%] h-[50px]">
            {/* Dropdown */}
            <select className="p-3 bg-gray-200 border-r-2 border-purple-primary text-sm font-bold text-gray-600 outline-none">
              <option value="Lenovo">Lenovo</option>
              <option value="Apple">Apple</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
            </select>

            {/* Input */}
            <input
              type="text"
              placeholder="Encuentra todo en tecnología"
              className="flex-grow p-3 text-gray-700 text-base outline-none"
            />

            {/* Botón de búsqueda */}
            <button
              className="p-3 bg-transparent hover:bg-purple-primary hover:text-white rounded-r-lg transition-colors duration-300"
              aria-label="Buscar"
            >
              <IoMdSearch size={20} />
            </button>
          </div>

          {/* Iconos de usuario */}
          <div className="flex items-center gap-12 text-white">
            <button className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors duration-300">
              <FaHeadphonesAlt size={28} />
              <span>Ayuda</span>
            </button>
            <button className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors duration-300">
              <FaRegUser size={28} />
              <span>Regístrate</span>
            </button>
            <button className="flex flex-col items-center text-sm hover:text-gray-300 transition-colors duration-300">
              <BiLogIn size={28} />
              <span>Iniciar sesión</span>
            </button>
            <button className="flex flex-col items-center text-sm relative hover:text-gray-300 transition-colors duration-300">
              <FaShoppingCart size={28} />
              <span>Carrito</span>
              {/* Badge de notificaciones */}
              <div className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <nav className="bg-purple-dark text-white flex items-center justify-center relative">
        <div className="max-w-screen-2xl w-full px-4 flex items-center justify-between text-sm py-2">
          {/* Botón de categorías */}
          <div className="relative">
            <button
              className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300"
              onClick={toggleCategories}
            >
              <AiOutlineMenu size={18} />
              <span className="font-bold">Todas las categorías</span>
            </button>
            {/* Menú desplegable */}
            <div
              className={`absolute left-0 top-10 bg-white text-purple-primary rounded-lg shadow-lg w-[200px] py-2 transform transition-all duration-300 ${
                isCategoriesOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } origin-top`}
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Links de navegación */}
          <div className="flex items-center gap-6">
            <button className="hover:text-gray-300 transition-colors duration-300">
              Laptops
            </button>
            <button className="hover:text-gray-300 transition-colors duration-300">
              Componentes
            </button>
            <button className="hover:text-gray-300 transition-colors duration-300">
              Computadoras
            </button>
            <button className="hover:text-gray-300 transition-colors duration-300">
              Impresoras
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
