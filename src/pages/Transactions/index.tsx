import { PriceHighlight, TableContainer, TableContent } from "./styles";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";
import { Trash } from "phosphor-react";

export const Transactions = () => {
  const deleteTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.deleteTransaction
  );

  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

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
                <td>
                  <Trash onClick={() => deleteTransaction(t.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </TableContent>
      </TableContainer>
    </div>
  );
};
