import { useContext } from "react";
import { PriceHighlight, TableContainer, TableContent } from "./styles";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TableContainer>
        <SearchForm />

        <TableContent>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.description}</td>
                <td>
                  <PriceHighlight variant={t.type}>{t.price}</PriceHighlight>
                </td>
                <td>{t.category}</td>
                <td>{t.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TableContent>
      </TableContainer>
    </div>
  );
};
