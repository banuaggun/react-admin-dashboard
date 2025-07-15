import React from "react";
import "./pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  // Dinamik yapı: 6 sayfa için ellipsisli görünüm
  if (currentPage <= 3) {
    pages.push(2, 3, 4);
    pages.push("ellipsis");
  } else if (currentPage >= 4) {
    pages.push(2);
    pages.push("ellipsis");
    pages.push(currentPage - 1);
    if (currentPage !== totalPages && currentPage !== 1) {
      pages.push(currentPage);
    }
    if (currentPage + 1 < totalPages) {
      pages.push(currentPage + 1);
    }
  }

  const showLastPage = !pages.includes(totalPages);

  return (
    <div className="pagination__container">
      {/* Geri Butonu */}
      <button
        className="pagination__control"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="ph-fill ph-caret-left"></i>
      </button>

      <div className="pagination__center">
        {/* Sayfa 1 */}
        <button
          className={`pagination__page${currentPage === 1 ? " pagination__page__active" : ""}`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>

        {/* Orta sayfalar */}
        {pages.map((page, idx) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${idx}`} className="pagination__dots">...</span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page)}
              className={`pagination__page${page === currentPage ? " pagination__page__active" : ""}`}
            >
              {page}
            </button>
          )
        )}

        {/* Son Sayfa */}
        {showLastPage && (
          <button
            className={`pagination__page${currentPage === totalPages ? " pagination__page__active" : ""}`}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        )}
      </div>

      {/* İleri Butonu */}
      <button
        className="pagination__control"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="ph-fill ph-caret-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
