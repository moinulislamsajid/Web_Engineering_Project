import { Link } from 'react-router-dom';

export default function OfferSection() {
  const offers = [
    {
      subtitle: "Electronics, Minimal",
      title: "Get Holiday Deals",
      buttonText: "VIEW COLLECTIONS",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-black",
      image: "/images/offer/watch.png",
    },
    {
      subtitle: "Retina Item",
      title: "Get 50% Off Every Handset",
      buttonText: "GO SHOP",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-black",
      image: "/images/offer/tshirt.png",
    },
    {
      subtitle: "Minimalism Design",
      title: "Music Makes Feel Better",
      buttonText: "SHOP NOW",
      buttonColor: "bg-black hover:bg-gray-900 text-white",
      image: "/images/offer/jacket.png",
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {offers.map((offer, index) => (
          <div
            key={index}
            className="relative bg-white overflow-hidden flex h-[250px] group cursor-pointer
                       transform transition-all duration-500 
                       hover:scale-[1.02] hover:-translate-y-3 
                       hover:shadow-3xl"
            style={{ borderRadius: '0px' }}
          >
            {/* Modern Inner Glow Border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-cyan-400/20 blur-xl" />
            </div>

            {/* Content */}
            <div className="w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10">
              <p className="text-gray-600 text-sm font-semibold mb-3 tracking-wider">
                {offer.subtitle}
              </p>
              <h3 className="text-2xl font-black text-gray-900 mb-8 leading-tight">
                {offer.title}
              </h3>
              <Link
                to="/shop"
                className={`${offer.buttonColor} px-2 py-3.5 text-center font-bold text-[8px] leading-none tracking-widest shadow-lg
                           shadow-lg `}
              >
                {offer.buttonText}
              </Link>
            </div>

            {/* Image */}
            <div className="w-1/2 bg-gray-100 relative overflow-hidden">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}