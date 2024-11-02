'use client';
import React, { useState } from 'react';
import Modal from './modal';
import CategoryFilter from './CategoryFilter';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';
import ProductCard from './ProductCard';
import {products} from '../data/ProductList'
type Product = {
  img: StaticImageData;
  name: string;
  description: string;
  price: string;
  category: string;
};
const categories = ['All', 'category1', 'category2', 'category3', 'category4', 'category5'];
function Feature() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
      
      <div className="flex justify-center mb-10 space-x-4">
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {selectedProducts.map((product, index) => (
          <ProductCard key={index} product={product} openModal={openModal} />
        ))}
      </div>

      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handlePageClick={handlePageClick}
      />

      
      {isModalOpen && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </section>
  );
}

export default Feature;
