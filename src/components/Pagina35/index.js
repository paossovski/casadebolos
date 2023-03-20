import '../../global_styles.css';
import './styles.css';

import Bolos28 from '../../images/bolos_28.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina35 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-35'>
        <img src={Bolos28} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={35} />
      </div>
    </div>
  );
}