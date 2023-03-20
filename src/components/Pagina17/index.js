import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina17 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div>Mapa kobrasol</div>
      <div className='Paginacao-Container'>
        <Numeracao num={17} />
      </div>
    </div>
  );
}