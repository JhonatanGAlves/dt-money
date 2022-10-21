import { useState, useEffect } from "react";
import { PriceHighlight, TableContainer, TableContent } from "./styles";
import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { getTransactions } from "../../api/api";

type Transactions = {
  id: number;
  description: "Website development";
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
};

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    getTransactions().then((data) => setTransactions(data));
  }, []);

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
