import React, { useState, useEffect, useRef } from "react";
import { FaRegUser, FaShoppingCart, FaHeadphonesAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import LogoId from "../../assets/LogoId.png"; // Importa la imagen del logo
import { Link } from "react-router-dom";
import { indexRoutes } from "../../constants/index.routes";

const Navbar = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const closeCategories = (event: MouseEvent) => {
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target as Node)
    ) {
      setIsCategoriesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeCategories);
    return () => {
      document.removeEventListener("mousedown", closeCategories);
    };
  }, []);

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
    <header className="h-auto flex flex-col font-mulish">
      {/* Barra superior */}
      <div className="bg-pink-primary text-white text-center py-2 text-xs md:text-sm font-bold">
        <span>OBTÉN ENVÍO GRATIS POR UNA COMPRA MAYOR A S/ 300</span>
      </div>

      <div className="bg-purple-primary h-auto flex items-center justify-center px-4">
        <div className="max-w-screen-2xl w-[90%] 2xl:w-full flex flex-col md:flex-row items-center justify-between gap-4 py-4">
          <div className="flex justify-center md:justify-start">
            <Link to={indexRoutes.HOME_STORE}>
              <figure>
                <img
                  src={LogoId}
                  alt="IDOOGOLogo"
                  className="h-8 md:h-10 hover:scale-110 transition-transform duration-300"
                />
              </figure>
            </Link>
          </div>

          <div className="flex items-center bg-white border-2 border-purple-primary rounded-lg overflow-hidden w-full md:w-[60%] h-[40px] md:h-[50px]">
            <select className="p-2 md:p-3 bg-gray-200 border-r-2 h-[100%] text-xs md:text-sm font-bold text-gray-600 outline-none">
              <option value="Lenovo">Lenovo</option>
              <option value="Apple">Apple</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
            </select>
            <input
              type="text"
              placeholder="Encuentra todo en tecnología"
              className="flex-grow p-2 md:p-3 text-gray-700 text-xs md:text-sm outline-none"
            />
            <button
              className="p-3 bg-transparent hover:bg-purple-primary h-[100%] hover:text-white  transition-colors duration-300"
              aria-label="Buscar"
            >
              <IoMdSearch
                className="text-gray-700 md:text-gray-600"
                size={18}
              />
            </button>
          </div>

          <div className="flex justify-center md:justify-end items-center gap-4 md:gap-8 text-white">
            <button className="flex flex-col items-center text-xs md:text-sm hover:text-gray-300 transition-colors duration-300">
              <FaHeadphonesAlt size={22} className="md:w-6 md:h-6" />
              <span>Ayuda</span>
            </button>
            <button className="flex flex-col items-center text-xs md:text-sm hover:text-gray-300 transition-colors duration-300">
              <FaRegUser size={22} className="md:w-6 md:h-6" />
              <span>Regístrate</span>
            </button>
            <button className="flex flex-col items-center text-xs md:text-sm hover:text-gray-300 transition-colors duration-300">
              <BiLogIn size={22} className="md:w-6 md:h-6" />
              <span>Iniciar sesión</span>
            </button>
            <button className="flex flex-col items-center text-xs md:text-sm relative hover:text-gray-300 transition-colors duration-300">
              <FaShoppingCart size={22} className="md:w-6 md:h-6" />
              <span>Carrito</span>
              <div className="absolute top-[-5px] right-[-10px] bg-red-500 text-white text-[10px] md:text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </div>
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-purple-dark text-white flex items-center justify-center relative px-4">
        <div className="max-w-screen-2xl w-[90%] 2xl:w-full flex flex-wrap md:flex-nowrap items-start md:items-center justify-between text-xs md:text-sm py-2 gap-2">
          <div className="relative md:hidden" ref={categoriesRef}>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-purple-primary text-white rounded-lg hover:bg-purple-dark hover:text-gray-300 transition-colors duration-300"
              onClick={toggleCategories}
            >
              <AiOutlineMenu size={18} />
              <span className="font-bold">Todas las categorías</span>
            </button>
            <div
              className={`absolute left-0 top-12 bg-white text-purple-primary rounded-lg shadow-lg w-[200px] py-2 transform transition-all duration-300 ${
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

          <div className="hidden md:block relative" ref={categoriesRef}>
            <button
              className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300"
              onClick={toggleCategories}
            >
              <AiOutlineMenu size={18} />
              <span className="font-bold">Todas las categorías</span>
            </button>
            <div
              className={`absolute left-0 top-full mt-2 bg-white text-purple-primary rounded-lg shadow-lg w-[200px] py-2 transform transition-all duration-300 ${
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

          <div className="flex flex-wrap gap-4 md:flex-row md:gap-6">
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
