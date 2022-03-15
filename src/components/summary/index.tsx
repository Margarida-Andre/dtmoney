import { Container } from "./style";
import imgEntradas from '../../assets/Entradas.svg';
import imgSaidas from '../../assets/Saidas.svg';
import imgTotal from '../../assets/Total.svg';

export function Summary() {
  return(
      <Container>
          <div>
              <header>
                  <p>Entradas</p>
                  <img src={imgEntradas} alt="entradas" />
              </header>
              <strong>R$ 17.400,00</strong>
          </div>

          <div>
              <header>
                  <p>Saídas</p>
                  <img src={imgSaidas} alt="saídas" />
              </header>
              <strong>R$ 1.259,00</strong>
          </div>

          <div className="total">
              <header>
                  <p>Total</p>
                  <img src={imgTotal} alt="total" />
              </header>
              <strong>R$ 16.141,00</strong>
          </div>
      </Container>
  )
}
