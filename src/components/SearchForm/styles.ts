import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;

    border-radius: 6px;
    border: 0;

    color: ${({ theme }) => theme["gray-300"]};
    background: ${({ theme }) => theme["gray-900"]};

    ::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;

    border: 0;
    border: 1px solid ${({ theme }) => theme["blue-300"]};
    border-radius: 6px;

    font-weight: bold;

    background: transparent;
    color: ${({ theme }) => theme["blue-300"]};
    cursor: pointer;

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    :not(:disabled):hover {
      border-color: ${({ theme }) => theme["blue-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;

      color: ${({ theme }) => theme["white"]};
      background: ${({ theme }) => theme["blue-500"]};
    }
  }
`;
