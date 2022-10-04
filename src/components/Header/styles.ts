import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  background-color: ${({ theme }) => theme["gray-900"]};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  font-weight: bold;

  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme["blue-500"]};

  &:hover {
    background-color: ${({ theme }) => theme["blue-700"]};
    transition: background-color 0.2s;
  }
`;
