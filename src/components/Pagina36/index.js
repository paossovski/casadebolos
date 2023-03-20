import '../../global_styles.css';
import './styles.css';

import Bolos29 from '../../images/bolos_29.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina36 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-36'>
        <img src={Bolos29} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={36} />
      </div>
    </div>
  );
}