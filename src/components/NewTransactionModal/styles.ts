import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const NtmContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme["gray-800"]};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      border-radius: 6px;
      border: 0;
      padding: 1rem;

      color: ${({ theme }) => theme["gray-300"]};
      background: ${({ theme }) => theme["gray-900"]};

      ::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      margin-top: 1.25rem;
      height: 50px;
      padding: 0 1.25rem;

      border: 0;
      border-radius: 6px;
      font-weight: bold;
      cursor: pointer;

      color: ${({ theme }) => theme.white};
      background: ${({ theme }) => theme["blue-500"]};

      :disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      :not(:disabled):hover {
        background: ${({ theme }) => theme["blue-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  line-height: 0;
  cursor: pointer;

  color: ${({ theme }) => theme["gray-500"]};
  background: transparent;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  border-radius: 6px;
  border: 0;

  cursor: pointer;

  color: ${({ theme }) => theme["gray-300"]};
  background: ${({ theme }) => theme["gray-700"]};

  svg {
    color: ${({ variant, theme }) =>
      variant === "income" ? theme["blue-300"] : theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    transition: background-color 0.2s;
    background: ${({ theme }) => theme["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    background: ${({ variant, theme }) =>
      variant === "income" ? theme["blue-500"] : theme["red-500"]};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`;
