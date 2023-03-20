import '../../global_styles.css';
import './styles.css';

import Bolos19 from '../../images/bolos_19.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina26 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-26'>
        <img src={Bolos19} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={26} />
      </div>
    </div>
  );
}