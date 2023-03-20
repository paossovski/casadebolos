import '../../global_styles.css';
import './styles.css';

import Bolos24 from '../../images/bolos_24.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina31 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-31'>
        <img src={Bolos24} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={31} />
      </div>
    </div>
  );
}