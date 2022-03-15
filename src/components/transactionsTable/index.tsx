import { Container } from './styles';

export function TransactionsTable(){
    return(
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
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="entrada">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="saida">- R$ 1.200,00</td>
                        <td>Casa</td>
                        <td>27/03/2021</td>
                    </tr>              
                </tbody>
            </table>
        </Container>

    )
}