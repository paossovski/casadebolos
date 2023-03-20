import '../../global_styles.css';
import './styles.css';

import Bolos25 from '../../images/bolos_25.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina32 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-32'>
        <img src={Bolos25} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={32} />
      </div>
    </div>
  );
}