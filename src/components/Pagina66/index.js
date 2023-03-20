import '../../global_styles.css';
import './styles.css';

import Bolo68 from '../../images/bolos_68.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina66 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-66'>
        <p className='Texto T-66'>
          <b>COMPRAS SEMANAIS – DEPÓSITO LOJAS E INSUMOS COMPRAS DO CEASA:</b> Em baixa temporada (janeiro a abril) o Ceasa será feito uma vez por semana (TERÇA- FEIRA) e na alta temporada 2x na semana (TERÇA-FEIRA E SEXTA-FEIRA); sempre fazer o pedido para durar até a próxima compra. Pedido deve ser feito na planilha semanal de compras, no sábado até as 12h.
        </p><br/><br/>
        <p className='Texto T-66'>
          <b>SEMPRE OBSERVAR O ESTOQUE:</b> Cada loja possui um depósito, manter SEMPRE organizado e abastecido. Loja precisa de algo? <b>ANOTE NA PLANILHA DE PEDIDOS DE COMPRAS SEMPRE AOS SÁBADOS.</b> Obs: O quanto antes abastecemos o depósito. Antes de sair comprando, <b>ANOTE NA PLANILHA.</b>
        </p><br/><br/>
        <p className='Texto T-66'>
          <b>PEDIDO DE COMPRAS/REPOSIÇÃO DE DEPÓSITO:</b> Feito 1x por semana, sempre com antecedência, através de formulário próprio assinalando a quantidade exata a ser enviada. Exemplo: Pedidos feitos no sábado, <b>tem uma semana para ser enviado,</b> ou seja, é necessário se programar. Em caso de falta de algum produto, por squecimento ou alta demanda, sempre anotem em pedidos urgentes na planilha de produção:
        </p><br/><br/>
        <img className='Img-66' src={Bolo68} alt="" /><br/><br/>
        <p className='Texto T-66'>
          <b>Obs:</b> Nunca mande WhatsApp ou ligue, solicitando o pedido, muito menos saia comprando no mercado mais próximo. Compras somente com a autorização da supervisão.
        </p><br/><br/>
        <p className='Texto T-66'>
          <b>Quando receber as compras, mantenha a rotatividade dos produtos corretamente.</b> Regra básica: PEPS (primeiro que entra, primeiro que sai)
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={66} />
      </div>
    </div>
  );
}