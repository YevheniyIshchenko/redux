import React from "react";

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  // input : currentPage, itemsPerPage, UsersCounts
  // output ; boolean
  const isShowFirstPageBtn = currentPage === 1;
  const isShowLastPageBtn = currentPage * itemsPerPage >= totalItems;
  return (
    <div className='pagination'>
      <button className='btn' onClick={goPrev} disabled={isShowFirstPageBtn}>
        {!isShowFirstPageBtn ? "←" : null}
      </button>
      <span className='pagination__page'>{currentPage}</span>
      <button className='btn' onClick={goNext} disabled={isShowLastPageBtn}>
        {!isShowLastPageBtn ? "→" : null}
      </button>
    </div>
  );
};

export default Pagination;
