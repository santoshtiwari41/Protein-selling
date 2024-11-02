import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
            selectedCategory === category ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
