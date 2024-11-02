import React from 'react';

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500 w-full md:w-64"
    />
  );
};

export default SearchFilter;
