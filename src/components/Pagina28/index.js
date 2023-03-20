import '../../global_styles.css';
import './styles.css';

import Bolos21 from '../../images/bolos_21.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina28 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-27'>
        <img src={Bolos21} alt="" />
      </div><br/><br/>
      <div className='Paginacao-Container'>
        <Numeracao num={28} />
      </div>
    </div>
  );
}