import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactios] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactios(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "AOA",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
