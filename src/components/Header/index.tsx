import logo from "../../assets/logo.svg";
import { Container, Content } from "./style";

interface HeaderProps {
  onOpenNewtransactionModal: () => void;
}
export function Header( {onOpenNewtransactionModal }: HeaderProps ) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewtransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
