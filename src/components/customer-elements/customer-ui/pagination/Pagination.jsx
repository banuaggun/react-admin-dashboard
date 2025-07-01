import React from "react";
import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages = [];
    
    // İlk sayfa her zaman gösterilir
    pages.push(1);
   

    // Eğer 2. veya daha düşük bir sayfa varsa direkt 1 2 3 ... formatını göster
    if (currentPage < 3) {
      pages.push(2);
      pages.push(3);
      if (totalPages > 4) pages.push("...");
    } else {
      // Eğer 3 veya üzerindeyse, önce "..." ekleyelim (kaymaya başlayacak)
      if (currentPage > 3) pages.push("...");

      // Aktif sayfa ve çevresindeki sayfalar (örneğin 3 4 5)
      for (let i = Math.max(3, currentPage); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        pages.push(i);
      }

      // Eğer sayfa sayısı hala son sayfadan uzaktaysa "..." ekleyelim
      if (currentPage + 2 < totalPages) pages.push("...");
    }

    // Son sayfa her zaman gösterilir
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>First</button>
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Prev</button>
      
      {generatePageNumbers().map((page, index) => (
        <button 
          key={index} 
          disabled={page === "..." || page === currentPage} 
          className={page === currentPage ? "active" : ""}
          onClick={() => typeof page === "number" && onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
            <button disabled={currentPage === totalPages} onClick={() => onPageChange(totalPages)}>Last</button>
    </div>
  );
};

export default Pagination;
