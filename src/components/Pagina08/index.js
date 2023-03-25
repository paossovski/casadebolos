import '../../global_styles.css';
import './styles.css';

import Bolos04 from '../../images/bolos_04.jpg';
import { Numeracao } from '../Numeracao';

export const Pagina08 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-Pagina08'>
        <div className='Texto Margens08'>
          <i className='Texto'>Todas as Marias da Paz, a minha vó, a Vó Sônia e a todas as boleiras e boleiros dignos, a lição que fica é que que vale a pena lutar, a sentir orgulho das origens e que fazer bolo é um gesto de amor porque é simples ser feliz.</i><br/><br/>
          <i className='Texto Italico08'>-Murilo Bonucci</i>
        </div>
        <div className='Img-Pagina08'>
          <img className='Img08' src={Bolos04} alt="" />
        </div>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={8} />
      </div>
    </div>
  );
}