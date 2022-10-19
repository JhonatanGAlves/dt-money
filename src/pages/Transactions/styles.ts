import styled from "styled-components";

export const TableContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TableContent = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; */ // Waiting for search field

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme["gray-700"]};

    :first-child {
      width: 50%;
      border-radius: 6px 0 0 6px;
    }

    :last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    variant === "income" ? theme["blue-300"] : theme["red-300"]};
`;
