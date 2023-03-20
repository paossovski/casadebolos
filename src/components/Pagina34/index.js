import '../../global_styles.css';
import './styles.css';

import Bolos27 from '../../images/bolos_27.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina34 = () => {
  return(
    <div className='Pagina Pagina-Container Margens-Book'>
      <div className='Container-34'>
        <img src={Bolos27} alt="" />
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={34} />
      </div>
    </div>
  );
}