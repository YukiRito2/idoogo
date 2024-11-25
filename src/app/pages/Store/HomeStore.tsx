import { FaRegCreditCard, FaTruck, FaStar } from "react-icons/fa";
import Visa from "../../assets/Visa.png";
import Mastercard from "../../assets/Mastercard.png";
import AmericanExpress from "../../assets/AmericanExpress.png";
import Dinner from "../../assets/Dinner.png";
import Yape from "../../assets/Yape.png";
import Banner from "../../assets/Banner.png";

const HomeStore = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-mulish">
      {/* Banner principal */}
      <div className="w-full">
        <img
          src={Banner}
          alt="Banner principal"
          className="w-full object-cover"
        />
      </div>

      {/* Sección de beneficios */}
      <div className="max-w-screen-2xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-pink-50 p-4 rounded-lg shadow-md flex items-center gap-4">
          <FaRegCreditCard className="text-pink-500 text-4xl" />
          <div>
            <h3 className="font-bold mb-1">Compra hasta en</h3>
            <p className="text-lg font-semibold">6 cuotas sin intereses</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <h3 className="font-bold mb-2">Múltiples métodos de pago</h3>
          <div className="flex gap-2 items-center">
            <img src={Visa} alt="Visa" className="h-6 object-contain" />
            <img
              src={Mastercard}
              alt="Mastercard"
              className="h-6 object-contain"
            />
            <img
              src={AmericanExpress}
              alt="American Express"
              className="h-6 object-contain"
            />
            <img src={Dinner} alt="Dinner" className="h-6 object-contain" />
            <img src={Yape} alt="Yape" className="h-6 object-contain" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-pink-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <div className="flex mb-2">
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
          </div>
          <h3 className="font-bold mb-1">Compras seguras y garantizadas</h3>
          <p className="text-sm">Asesoría experta con productos de calidad</p>
        </div>

        {/* Card 4 */}
        <div className="bg-pink-50 p-4 rounded-lg shadow-md flex items-center gap-4">
          <FaTruck className="text-pink-500 text-4xl" />
          <div>
            <h3 className="font-bold mb-1">Envíos a nivel nacional</h3>
            <p className="text-sm">Llegamos gratis a todo el Perú</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStore;
