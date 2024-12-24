import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Riad Suite',
    description: 'Experience authentic Moroccan luxury in our spacious Riad suite with traditional decor and modern amenities.',
    price: 299,
    image: '/images/room1.jpg',
    amenities: ['King Bed', 'Private Terrace', 'Hammam Access', 'Free WiFi']
  },
  {
    id: 2,
    name: 'Garden View Room',
    description: 'Peaceful room overlooking our traditional Moroccan garden, featuring handcrafted furniture and luxury bedding.',
    price: 199,
    image: '/images/room2.jpg',
    amenities: ['Queen Bed', 'Garden View', 'En-suite Bathroom', 'Free WiFi']
  },
  {
    id: 3,
    name: 'Royal Moroccan Suite',
    description: 'Our finest accommodation with stunning views, featuring authentic Moroccan craftsmanship and premium services.',
    price: 399,
    image: '/images/room3.jpg',
    amenities: ['King Bed', 'Private Pool', 'Butler Service', 'Free WiFi']
  }
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      {/* Header */}
      <div className="bg-white py-16">
        <div className="max-w-[2000px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Our Luxury Rooms</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our collection of thoughtfully designed rooms and suites, each offering a unique blend of traditional Moroccan elegance and modern comfort.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-[2000px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-playfair">{room.name}</h3>
                  <p className="text-xl font-medium text-[#8B6B4D]">${room.price}/night</p>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-3 py-1 bg-[#F8F5F1] text-sm text-gray-700 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/rooms/${room.id}`}
                  className="block w-full text-center py-2 bg-[#8B6B4D] text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
