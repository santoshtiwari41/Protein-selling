'use client';
import React, { useState } from 'react';
import Modal from './modal';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { OfferProducts } from '@/data/OfferProductList';
function Feature() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
 
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = OfferProducts.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(OfferProducts.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 mt-20">
        Offer Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {selectedProducts.map((product, index) => (
          <motion.div
            key={index}
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
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-400 transition duration-300" onClick={() => openModal(product)}>
              Order
            </button>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded-lg ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-400 text-white'}`}
        >
          Previous
        </button>
        
       
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`w-2.5 h-2.5 rounded-full ${currentPage === index + 1 ? 'bg-indigo-500' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`py-2 px-4 rounded-lg ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-400 text-white'}`}
        >
          Next
        </button>
      </div>
      {isModalOpen && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </section>
  );
}

export default Feature;
