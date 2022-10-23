import { useContext } from "react";
import { PriceHighlight, TableContainer, TableContent } from "./styles";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

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
                  <PriceHighlight variant={t.type}>
                    {t.type === "outcome" && "- "}
                    {priceFormatter.format(t.price)}
                  </PriceHighlight>
                </td>
                <td>{t.category}</td>
                <td>{dateFormatter.format(new Date(t.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TableContent>
      </TableContainer>
    </div>
  );
};
