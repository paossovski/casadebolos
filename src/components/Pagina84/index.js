import '../../global_styles.css';
import './styles.css';

import Bolo84 from '../../images/bolos_84.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina84 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-84'>
        <img className='Img-84' src={Bolo84} alt="" /><br/><br/><br/>
        <p className='Texto T-84'>
          <b>METAS:</b> Alguns colaboradores trabalham com remuneração extra e com metas. Isso é informado na contratação ou quando necessário. Favor verificar as informações de metas, elas são alteradas conforme período. As metas são em grupo, ou seja, todos devem colaborar para que seja atingida. As metas só ficam ativas quando os números de vendas, avaliação da loja e quantidade de problemas chega em um patamar, caso contrário estão suspensas.
        </p><br/><br/>
        <p className='Texto T-84'>
          <b>BOLO PARA  FUNCIONÁRIOS - IMPORTANTE SABER  O PORQUE O BENEFÍCIO FOI PERDIDO -</b> Até dezembro de 2018 mensalmente todos os funcionários tinham o valor estipulado três unidades de bolo baby para ser consumido em bolos para consumo pessoal, podendo comprar qualquer produto e abater do valor. 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={84} />
      </div>
    </div>
  );
}