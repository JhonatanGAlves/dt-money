import { PriceHighlight, TableContainer, TableContent } from "./styles";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "../../components/SearchForm/SearchForm";

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TableContainer>
        <SearchForm />

        <TableContent>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/09/2022</td>
            </tr>
          </tbody>
        </TableContent>
      </TableContainer>
    </div>
  );
};
