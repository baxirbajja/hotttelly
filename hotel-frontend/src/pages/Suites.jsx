import { motion } from 'framer-motion';

const Suites = () => {
  const suites = [
    {
      name: 'Royal Riad Suite',
      description: 'Experience authentic Moroccan luxury in our spacious Royal Riad Suite, featuring traditional architecture and modern amenities.',
      price: '3,500 MAD',
      image: '/images/royal-riad.jpg'
    },
    {
      name: 'Andalusian Garden Suite',
      description: 'A peaceful haven inspired by the gardens of Andalusia, complete with a private terrace and fountain.',
      price: '2,800 MAD',
      image: '/images/andalusian.jpg'
    },
    {
      name: 'Medina View Suite',
      description: 'Immerse yourself in the heart of Moroccan culture with breathtaking views of the ancient Medina.',
      price: '2,200 MAD',
      image: '/images/medina.jpg'
    },
    {
      name: 'Atlas Mountain Suite',
      description: 'Luxurious accommodation with panoramic views of the majestic Atlas Mountains.',
      price: '2,500 MAD',
      image: '/images/atlas.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">Our Luxury Suites</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our collection of meticulously designed suites, each offering a unique blend of 
            traditional Moroccan craftsmanship and modern luxury.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-96 mb-6 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${suite.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-playfair mb-2">{suite.name}</h3>
                  <p className="text-lg font-light">{suite.price} per night</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{suite.description}</p>
              <button className="mt-4 px-6 py-2 border border-[#8B6B4D] text-[#8B6B4D] hover:bg-[#8B6B4D] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suites;
