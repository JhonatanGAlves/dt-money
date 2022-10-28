import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import {
  CancelButton,
  CdmContent,
  ConfirmButton,
  Description,
  Overlay,
} from "./styles";

interface ConfirmDeletionModalProps {
  transactionId: number;
}

export const ConfirmDeletionModal = ({
  transactionId,
}: ConfirmDeletionModalProps) => {
  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.deleteTransaction
  );
  return (
    <AlertDialog.Portal>
      <Overlay>
        <CdmContent>
          <AlertDialog.Title>Você tem certeza?</AlertDialog.Title>
          <Description>Essa ação não poderá ser desfeita.</Description>
          <ConfirmButton onClick={() => deleteTransaction(transactionId)}>
            Confirmar
          </ConfirmButton>
          <CancelButton>Cancelar</CancelButton>
        </CdmContent>
      </Overlay>
    </AlertDialog.Portal>
  );
};
