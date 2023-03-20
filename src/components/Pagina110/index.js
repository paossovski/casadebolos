import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina110 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-110'>
        <h1 className='Texto C-110 P-110'>
          ESCOPOS DE TRABALHO
        </h1><br/><br/>
        <h3 className='Texto D-110'>
          ESCOPO DE TRABALHO ESTÁGIO ADMINISTRATIVO
        </h3><br/><br/><br/>
        <p className='Texto'>
        Declaro para os devidos fins que _____________________________________, lotada na 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={110} />
      </div>
    </div>
  );
}