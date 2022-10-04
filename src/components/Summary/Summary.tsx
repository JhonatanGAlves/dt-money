import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#2C558C" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="blue">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
