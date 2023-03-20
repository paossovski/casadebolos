import '../../global_styles.css';
import './styles.css';

import Bolo90 from '../../images/bolos_90.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina88 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-88'>
        <img className='Img-90' src={Bolo90} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={88} />
      </div>
    </div>
  );
}