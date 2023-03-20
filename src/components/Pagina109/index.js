import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina109 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-109'>
        <p className='Texto T-109'>
          <span className='C-109'>O que fazem com os bolos no final do dia?</span><br/><br/>
          Temos parceria com hotel, no fechamento passam aqui, pegam e servem no café. Bolos são fresquinhos, tem prazo de consumo de 24h, eles foram feitos agora final de tarde.
        </p><br/><br/>
        <p className='Texto T-109'>
          <span className='C-109 D-109'>Reclamação compra de cliente na loja física. Como agir?</span><br/><br/>Cliente entrou em contato por redes sociais ou presencial na loja constando erro de produção, bolo fora do padrão ou algum defeito (como data errada de produção anotada, cerda do pincel de desenforme... tudo o que não seja ‘normal’). Primeiramente, pedir perdão pelo ocorrido. Avisar ao cliente que avaliamos o produto no ato da troca mesmo, constatado o erro, imediatamente explique o ocorrido que levou a nossa falha. Faça a troca do produto, caso o cliente queira outro sabor, sem problemas, de. E em último caso, se houver resistência em troca, devolva o dinheiro. <b>Anote o nome do cliente, telefone e o bolo em questão
          </b> e passe para a Central de Atendimento cadastrar no sistema. 
        </p><br/><br/>
        <p className='Texto T-109'>
          Obs: anotar na planilha o bolo que foi trocado, como PERDA. E avisar a supervisão de imediato. Central de atendimento, taguear e cadastrar cliente como “problema” para que tenhamos cuidado extremo ao pegar novos pedidos desse cliente.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={109} />
      </div>
    </div>
  );
}