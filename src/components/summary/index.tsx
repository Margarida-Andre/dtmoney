import { Container } from "./style";
import imgEntradas from "../../assets/Entradas.svg";
import imgSaidas from "../../assets/Saidas.svg";
import imgTotal from "../../assets/Total.svg";
import { useTransactions } from "../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "entrada") {
        acc.entradas += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.saidas += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      entradas: 0,
      saidas: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgEntradas} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "AOA",
          }).format(summary.entradas)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={imgSaidas} alt="saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "AOA",
          }).format(summary.saidas)}
        </strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={imgTotal} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "AOA",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
