import React from 'react';
import { PaginationButtons } from './styles';

interface Props {
  totalIssues: number;
  issuesPerPage: number;
  paginate(number: number): void;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({
  totalIssues,
  issuesPerPage,
  paginate,
  currentPage,
}: Props) => {
  const pageNumber = [];
  const totalPages = Math.ceil(totalIssues / issuesPerPage);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <PaginationButtons>
        <button onClick={() => paginate(currentPage - 1)} type="button">
          Previous
        </button>
        {pageNumber.map((number) => (
          <button key={number} type="button" onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} type="button">
          Next
        </button>
      </PaginationButtons>
    </>
  );
};

export default Pagination;
