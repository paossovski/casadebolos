import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina21 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa curitiba novo mundo</div>
      <div className='Paginacao-Container'>
        <Numeracao num={21} />
      </div>
    </div>
  );
}