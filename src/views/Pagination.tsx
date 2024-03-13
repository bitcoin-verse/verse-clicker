import React from "react";
import styled from "styled-components";

import { colors } from "../components/colors";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: transparent;
  color: ${colors.shade80};
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 8px;

  &:hover {
    outline: solid 1px ${colors.verseBlue};
  }

  &:disabled {
    background-color: ${colors.verseBlue};
    cursor: not-allowed;
    color: ${colors.white};
  }
`;

const EllipsisSpan = styled.span`
  margin: 10px 8px;
  color: ${colors.shade80};
`;

interface PaginationData {
  total: number;
}

type Props<T extends PaginationData> = {
  data: T;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = <T extends PaginationData>({
  data,
  pageSize,
  currentPage,
  onPageChange,
}: Props<T>) => {
  const totalPages = Math.ceil(data.total / pageSize);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const shouldShowStartEllipsis = currentPage > 3;
    const shouldShowEndEllipsis = currentPage < totalPages - 2;

    // Always show the first page
    pageNumbers.push(
      <PageButton
        key="first-page"
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
      >
        1
      </PageButton>,
    );

    // Show ellipsis at the start if needed
    if (shouldShowStartEllipsis) {
      pageNumbers.push(<EllipsisSpan key="ellipsis-start">...</EllipsisSpan>);
    }

    // Calculate the range of page numbers to show
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 2);

    // Ensure we do not overlap with the first and last page buttons
    if (currentPage === 2) {
      startPage = 2;
    }
    if (currentPage === totalPages - 1) {
      endPage = totalPages - 1;
    }

    // Generate the page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButton
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={currentPage === i}
        >
          {i}
        </PageButton>,
      );
    }

    // Show ellipsis at the end if needed
    if (shouldShowEndEllipsis) {
      pageNumbers.push(<EllipsisSpan key="ellipsis-end">...</EllipsisSpan>);
    }

    // Always show the last page if more than one page
    if (totalPages > 1) {
      pageNumbers.push(
        <PageButton
          key="last-page"
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          {totalPages}
        </PageButton>,
      );
    }

    return pageNumbers;
  };

  return <PaginationContainer>{renderPageNumbers()}</PaginationContainer>;
};

export default Pagination;
