import '../../global_styles.css';
import './styles.css';

import Bolos26 from '../../images/bolos_26.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina33 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-33'>
        <img src={Bolos26} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={33} />
      </div>
    </div>
  );
}