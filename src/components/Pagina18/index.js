import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina18 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa mauro ramos</div>
      <div className='Paginacao-Container'>
        <Numeracao num={18} />
      </div>
    </div>
  );
}