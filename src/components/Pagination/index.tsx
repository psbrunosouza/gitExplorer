import React from 'react';
import { PaginationButtons, PaginationContainer } from './styles';

interface Props {
  totalItems: number;
  itemsPerPage: number;
  paginate(number: number): void;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({
  totalItems,
  itemsPerPage,
  paginate,
  currentPage,
}: Props) => {
  const pageNumber = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <PaginationContainer>
      <button
        className="previous-button"
        onClick={
          currentPage > 1
            ? () => paginate(currentPage - 1)
            : () => paginate(currentPage)
        }
        type="button"
      >
        Previous
      </button>
      <PaginationButtons>
        {pageNumber.map((number) => (
          <button key={number} type="button" onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </PaginationButtons>
      <button
        className="next-button"
        onClick={
          currentPage <= totalPages - 1
            ? () => paginate(currentPage + 1)
            : () => paginate(currentPage)
        }
        type="button"
      >
        Next
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
