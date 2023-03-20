import '../../global_styles.css';
import './styles.css';

import Bolos13 from '../../images/bolos_13.jpg';
import { Numeracao } from '../Numeracao';

export const Pagina23 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-P23'>
        <img className='Img23' src={Bolos13} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={23} />
      </div>
    </div>
  );
}