import '../../global_styles.css';
import './styles.css';

import Bolos18 from '../../images/bolos_18.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina25 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-25'>
        <h1 className='Texto H1-25'>
          VÓ SONIA TE DARÁ DICAS VALIOSAS: LEIA A HISTÓRIA
        </h1><br/>
        <img src={Bolos18} alt="" />
      </div><br/><br/>
      <div className='Paginacao-Container'>
        <Numeracao num={25} />
      </div>
    </div>
  );
}