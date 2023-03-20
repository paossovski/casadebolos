import '../../global_styles.css';
import './styles.css';

import Bolo79 from '../../images/bolos_79.jpg';
import Bolo80 from '../../images/bolos_80.jpg';
import Bolo81 from '../../images/bolos_81.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina81 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-81'>
        <div className='Container-Img-81'>
          <img className='Img-81' src={Bolo79} alt="" />
          <img className='Img-81' src={Bolo80} alt="" />
          <img className='Img-81' src={Bolo81} alt="" />
        </div><br/><br/><br/>
        <p className='Texto T-81'>
          <b>Esse QRCODE no crachá ele direciona o cliente até o whatsapp da loja, ou seja se o cliente quiser fazer contato com a gente, só direcionar o celular pro QRCODE.</b>
        </p><br/><br/><br/>
        <p className='Texto T-81'>
          <b>UNHA PINTADA E ACESSÓRIOS:</b> É proibido o uso de esmalte, brincos, colares e anéis, durante o expedinte de trabalho, além de ser uma regra interna da empresa é uma exigência da vigilância sanitária, ou seja, o colaborador (a) que for contra a regra, pode ser advertido (a) e se acontecer mais de uma vez, pode ser suspendido(a).
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={81} />
      </div>
    </div>
  );
}