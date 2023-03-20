import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina20 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa curitiba centro</div>
      <div className='Paginacao-Container'>
        <Numeracao num={20} />
      </div>
    </div>
  );
}