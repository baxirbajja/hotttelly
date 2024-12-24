import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImage from '../../img/bg.jpeg';

const Home = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen w-screen">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center w-screen"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-full flex flex-col justify-center items-center text-white text-center w-screen px-4"
          >
            <h1 className="text-5xl md:text-7xl font-playfair mb-4">Welcome to Hotelly</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto tracking-wide mb-8">Experience Authentic Moroccan Luxury</p>
            <Link
              to="/rooms"
              className="px-8 py-3 bg-white text-[#8B6B4D] hover:bg-white/90 transition-colors rounded-md text-lg font-medium"
            >
              Explore Our Rooms
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white"
        >
          <span className="text-sm uppercase tracking-widest mb-2">Scroll to explore</span>
          <div className="w-px h-16 bg-white/50" />
        </motion.div>
      </div>

      {/* Welcome Section */}
      <section className="w-screen py-20 bg-white">
        <div className="w-screen max-w-[2000px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-playfair mb-6">A Moroccan Haven</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Nestled in the heart of Morocco, Hotelly offers an unparalleled blend of traditional hospitality
              and modern luxury. Each space is thoughtfully crafted to immerse you in the rich cultural heritage
              while providing world-class comfort and service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-screen py-20 bg-[#F8F5F1]">
        <div className="w-screen max-w-[2000px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {['Traditional Riads', 'Moroccan Cuisine', 'Hammam & Spa'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center px-4"
              >
                <h3 className="text-2xl md:text-3xl font-playfair mb-4">{feature}</h3>
                <p className="text-gray-600 text-lg">
                  Experience the epitome of luxury with our carefully curated amenities and services.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
