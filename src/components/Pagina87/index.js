import '../../global_styles.css';
import './styles.css';

import Bolo86 from '../../images/bolos_86.jpg';
import Bolo87 from '../../images/bolos_87.jpg';
import Bolo88 from '../../images/bolos_88.jpg';
import Bolo89 from '../../images/bolos_89.jpg';

import { Numeracao } from '../Numeracao';

export const Pagina87 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-87'>
        <div className='Container-Img-87'>
          <img className='Img-87' src={Bolo86} alt="" />
          <img className='Img-87' src={Bolo87} alt="" />
        </div><br/><br/>
        <div className='Container-Img-87'>
          <img className='Img-87' src={Bolo88} alt="" />
          <img className='Img-87' src={Bolo89} alt="" />
        </div>        
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={87} />
      </div>
    </div>
  );
}