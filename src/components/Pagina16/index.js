import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina16 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa estreito</div>
      <div className='Paginacao-Container'>
        <Numeracao num={16} />
      </div>
    </div>
  );
}