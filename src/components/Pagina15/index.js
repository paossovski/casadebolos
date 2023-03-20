import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina15 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa Anita garibaldi</div>
      <div className='Paginacao-Container'>
        <Numeracao num={15} />
      </div>
    </div>
  );
}