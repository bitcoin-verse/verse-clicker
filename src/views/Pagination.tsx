import React, { ReactNode } from "react";
import styled from "styled-components";

import Chevron from "../components/Icons/Chevron";
import { colors } from "../components/colors";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ChevronWrapper = styled.button`
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
  color: ${colors.white};

  &:hover {
    outline: solid 1px ${colors.verseBlue};
  }

  &:disabled {
    background-color: ${colors.verseBlue};
    cursor: not-allowed;
    color: ${colors.shade80};
  }
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

/**
 * Pagination component for handling data pagination.
 *
 * @component
 * @param {Object} props - The properties that define the Pagination component.
 * @param {T} props.data - The data to be paginated.
 * @param {number} props.pageSize - The number of items per page.
 * @param {number} props.currentPage - The current page number.
 * @param {function} props.onPageChange - The function to be called when the page changes.
 * @returns {ReactNode} The Pagination component.
 *
 * @template T
 * @extends {PaginationData}
 */
const Pagination = <T extends PaginationData>({
  data,
  pageSize,
  currentPage,
  onPageChange,
}: Props<T>): ReactNode => {
  const totalPages = Math.ceil(data.total / pageSize);

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers: ReactNode[] = [];

    const renderPageButton = (pageNumber: number, key: string) => (
      <PageButton
        key={key}
        onClick={() => handlePageClick(pageNumber)}
        disabled={currentPage === pageNumber}
      >
        {pageNumber}
      </PageButton>
    );

    const renderEllipsis = (key: string) => (
      <EllipsisSpan key={key}>...</EllipsisSpan>
    );

    const renderChevron = (direction: "left" | "right") => (
      <ChevronWrapper
        style={{ background: "transparent" }}
        key={direction}
        onClick={() =>
          handlePageClick(currentPage + (direction === "left" ? -1 : 1))
        }
        disabled={
          direction === "left" ? currentPage === 1 : currentPage === totalPages
        }
      >
        <Chevron rotateDeg={direction === "left" ? 0 : 180} />
      </ChevronWrapper>
    );

    const shouldShowStartEllipsis = currentPage > 3;
    const shouldShowEndEllipsis = currentPage < totalPages - 2;

    pageNumbers.push(renderChevron("left"));
    // Always show the first page
    pageNumbers.push(renderPageButton(1, "first-page"));

    // Show ellipsis at the start if needed
    if (shouldShowStartEllipsis) {
      pageNumbers.push(renderEllipsis("ellipsis-start"));
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
      pageNumbers.push(renderPageButton(i, `${i}`));
    }

    // Show ellipsis at the end if needed
    if (shouldShowEndEllipsis) {
      pageNumbers.push(renderEllipsis("ellipsis-end"));
    }

    // Always show the last page if more than one page
    if (totalPages > 1) {
      pageNumbers.push(renderPageButton(totalPages, "last-page"));
    }

    pageNumbers.push(renderChevron("right"));

    return pageNumbers;
  };

  return <PaginationContainer>{renderPageNumbers()}</PaginationContainer>;
};

export default Pagination;
