import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
interface ModalProps {
  onOpenNewTransactionsModal: () => void;
}
export function Header({ onOpenNewTransactionsModal }: ModalProps) {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <button type="button" onClick={onOpenNewTransactionsModal}>
          Nava Transação
        </button>
      </Content>
    </Container>
  );
}
