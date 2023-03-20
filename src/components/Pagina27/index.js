import '../../global_styles.css';
import './styles.css';

import Bolos20 from '../../images/bolos_20.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina27 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-27'>
        <img src={Bolos20} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={27} />
      </div>
    </div>
  );
}