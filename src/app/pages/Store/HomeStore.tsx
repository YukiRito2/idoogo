import { FaRegCreditCard, FaTruck, FaStar } from "react-icons/fa";
import Visa from "../../assets/Visa.png";
import Mastercard from "../../assets/Mastercard.png";
import AmericanExpress from "../../assets/AmericanExpress.png";
import Dinner from "../../assets/Dinner.png";
import Yape from "../../assets/Yape.png";
import Banner from "../../assets/Banner.png";
import Laptop from "../../assets/Laptop.png";
import LaptopMediana from "../../assets/LaptopMediana.png";
import LaptopGrande from "../../assets/LaptopGrande.png";

const HomeStore = () => {
  return (
    <>
      <section className="w-full">
        {/* Banner principal */}
        <figure className="w-full">
          <img
            src={Banner}
            alt="Banner principal"
            className="w-full object-cover"
          />
        </figure>
      </section>

      <section>
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
      </section>

      <section>
        {/* Sección de laptops */}
        <div className="max-w-screen-2xl mx-auto px-4 py-12 grid gap-6">
          {/* Primera fila: 3 imágenes pequeñas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, idx) => (
              <figure
                key={idx}
                className="w-full max-w-[646px] mx-auto rounded-lg shadow-md overflow-hidden"
                style={{ aspectRatio: "646 / 354" }}
              >
                <img
                  src={Laptop}
                  alt={`Laptop pequeña ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-center text-sm mt-2">
                  Laptop pequeña {idx + 1}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Segunda fila: 1 imagen grande centrada y 1 imagen pequeña a la derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <figure
              className="w-full max-w-[1032px] mx-auto rounded-lg shadow-md overflow-hidden lg:col-span-1"
              style={{ aspectRatio: "1032 / 295" }}
            >
              <img
                src={LaptopGrande}
                alt="Laptop grande"
                className="w-full h-auto object-cover"
              />
              <figcaption className="text-center text-sm mt-2">
                Laptop grande
              </figcaption>
            </figure>

            <div className="flex justify-center lg:justify-start">
              <figure
                className="w-full max-w-[650px] mx-auto rounded-lg shadow-md overflow-hidden"
                style={{ aspectRatio: "650 / 246" }}
              >
                <img
                  src={LaptopMediana}
                  alt={`Laptop mediana`}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-center text-sm mt-2">
                  Laptop mediana
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Tercera fila: 2 imágenes medianas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 2 }).map((_, idx) => (
              <figure
                key={idx}
                className="w-full max-w-[650px] mx-auto rounded-lg shadow-md overflow-hidden"
                style={{ aspectRatio: "650 / 246" }}
              >
                <img
                  src={LaptopMediana}
                  alt={`Laptop mediana ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-center text-sm mt-2">
                  Laptop mediana {idx + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeStore;
