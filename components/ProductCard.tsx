import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Product = {
  img: StaticImageData;
  name: string;
  description: string;
  price: string;
  category: string;
};

interface ProductCardProps {
  product: Product;
  openModal: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, openModal }) => {
  return (
    <motion.div
      className="border rounded-lg shadow-lg p-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={product.img}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
        layout="responsive"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <span className="text-indigo-600 font-bold text-lg mb-2 block">{product.price}</span>
      <button
        onClick={() => openModal(product)}
        className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-400 transition duration-300"
      >
        Order
      </button>
    </motion.div>
  );
};

export default ProductCard;
