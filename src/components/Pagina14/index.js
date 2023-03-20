import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina14 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa conselheiro mafra</div>
      <div className='Paginacao-Container'>
        <Numeracao num={14} />
      </div>
    </div>
  );
}