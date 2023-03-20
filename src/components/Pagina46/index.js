import '../../global_styles.css';
import './styles.css';

import Bolos44 from '../../images/bolos_44.jpg';
import Bolos45 from '../../images/bolos_45.png';

import { Numeracao } from '../Numeracao';

export const Pagina46 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-46'>
        <p className='Texto T-46'>
          <b>COMANDAS DE PEDIDOS:</b> Muito importante preencher com as ocorrências Exemplos: não veio buscar; não aceitar encomenda sem pagamento antecipado; (apenas clientes problemáticos, bolos funcionais) ligamos e não atendeu; <b>TEMOS UM BANCO DE DADOS</b> e ''alimentamos'' essas informações. <b>SEMPRE</b> registre as comandas em sua loja, no sistema.
        </p><br/><br/>
        <div className='Container-Img-46'>
          <img className='Bolos44' src={Bolos44} alt="" />
          <img className='Bolos45' src={Bolos45} alt="" />
        </div><br/><br/>
        <p className='Texto T-46'>
          <b>LIGAR PARA OS CLIENTES ESQUECIDOS:</b> A tolerância é de 1h após a não retirada de encomenda. Primeiro tentem ligar para o cliente pelo telefone fixo da loja, se não der, avise a Central de Atendimento. Enviarão WhatsApp pelo celular da Central. Nunca no seu telefone particular. Se estiver muito movimentado na loja e não conseguir ligar, avise a Central de Atendimento (48) 99180- 5070 imediatamente.<br/>
          Obs: Com a entrada do sistema oficial da Franquia, as comandas de encomendas serão registrada diretamente no sistema, unificando os dados desse cliente, para todas as lojas do Brasil.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={46} />
      </div>
    </div>
  );
}