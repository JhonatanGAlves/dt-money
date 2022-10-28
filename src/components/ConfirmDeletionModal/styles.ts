import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Overlay = styled(AlertDialog.AlertDialogOverlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const CdmContent = styled(AlertDialog.AlertDialogContent)`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme["gray-800"]};
`;

export const Description = styled(AlertDialog.AlertDialogDescription)`
  margin: 20px 0;
`;

export const ConfirmButton = styled(AlertDialog.AlertDialogAction)`
  height: 50px;
  padding: 0 1.25rem;
  margin-right: 10px;
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

export const CancelButton = styled(AlertDialog.AlertDialogCancel)`
  height: 50px;
  padding: 0 1.25rem;
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 6px;
  cursor: pointer;

  font-weight: bold;

  color: ${({ theme }) => theme.white};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme["blue-700"]};
    background-color: ${({ theme }) => theme.white};
    transition: background-color 0.2s;
  }
`;
