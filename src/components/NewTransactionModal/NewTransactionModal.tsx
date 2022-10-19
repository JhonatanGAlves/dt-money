import { CloseButton, NtmContent, Overlay } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <NtmContent>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </NtmContent>
    </Dialog.Portal>
  );
};
