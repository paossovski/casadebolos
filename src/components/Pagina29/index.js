import '../../global_styles.css';
import './styles.css';

import Bolos22 from '../../images/bolos_22.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina29 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-29'>
        <img src={Bolos22} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={29} />
      </div>
    </div>
  );
}