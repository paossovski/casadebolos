import '../../global_styles.css';
import './styles.css';

import Bolo85 from '../../images/bolos_85.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina86 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-86'>
        <img className='Img-86' src={Bolo85} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={86} />
      </div>
    </div>
  );
}