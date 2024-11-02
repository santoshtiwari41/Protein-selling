import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNext: () => void;
  handlePrevious: () => void;
  handlePageClick: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
  handlePageClick,
}) => {
  return (
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
  );
};

export default Pagination;
