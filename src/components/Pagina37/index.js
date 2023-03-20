import '../../global_styles.css';
import './styles.css';

import Bolos30 from '../../images/bolos_30.jpg';
import Bolos31 from '../../images/bolos_31.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina37 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-37'>
        <h1 className='Texto T-37'>NOSSAS BASES</h1><br/><br/>
        <img className='Img-37' src={Bolos30} alt="" /><br/><br/>
        <img className='Img-37' src={Bolos31} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={37} />
      </div>
    </div>
  );
}