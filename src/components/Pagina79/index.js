import '../../global_styles.css';
import './styles.css';

import Bolo77 from '../../images/bolos_77.jpg';
import Bolo78 from '../../images/bolos_78.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina79 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-79'>
        <div className='Container-Img-79'>
          <img className='Img-79' src={Bolo77} alt="" />
          <img className='Img-79' src={Bolo78} alt="" />
        </div><br/><br/><br/><br/>
        <p className='Texto T-69'>
          <b>CLIENTE LIGOU, RECLAMOU E NÃO TEM MAIS O BOLO:</b> pegue os dados dele na hora, como o nome, telefone, referencias - faça mais perguntas sobre o problema, certifique-se que o bolo realmente pode ter problema pelo relato, acalme o cliente e diga que ele poderá trocar por um bolo do mesmo valor (trocas somente na loja que de fato ocorreu a compra e nunca em outras lojas)  Avise a Central de atendimento para colocar estas informações no cadastro do cliente Obs: o cliente tem um prazo de 30 dias para efetuar a troca, informe o cliente sobre esse prazo, mas tente fazer a troca de imedianto e incentivem as trocas por bolos rentáveis. SEMPRE!
        </p><br/><br/>
        <p className='Texto T-79'>
          <b>Sempre olhar WhatsApp de sua respectiva loja (da mesma maneira que você cuida do seu celular pessoal) -</b> passar para a Central de Atendimento situações  necessárias, para que elas entrem em contato com o cliente, assim, resolvendo a questão.
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={79} />
      </div>
    </div>
  );
}