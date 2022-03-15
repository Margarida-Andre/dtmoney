import { Container } from "./styles";
import { Summary } from "../summary/index";
import { TransactionsTable } from "../transactionsTable/index";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
