import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <button type="button">Nava Transação</button>
      </Content>
    </Container>
  );
}
