import '../../global_styles.css';
import './styles.css';

import Bolos23 from '../../images/bolos_23.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina30 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-30'>
        <img src={Bolos23} alt="" />
      </div><br/><br/>
      <div className='Paginacao-Container'>
        <Numeracao num={30} />
      </div>
    </div>
  );
}