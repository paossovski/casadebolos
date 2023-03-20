import '../../global_styles.css';
import './styles.css';

import { Numeracao } from '../Numeracao';

export const Pagina70 = () => {
  return(
    <div className='Pagina Pagina-Container Margens'>
      <div className='Container-70'>
        <p className='Texto T-70'>
          <b>Informações complementares:</b>
        </p>
        <p className='Texto T-70'>
          ⮚	Cargo/função;<br/>
          ⮚	Horário de trabalho;<br/>
          ⮚	Data de início – admissão;<br/>
          ⮚	Grau de escolaridade;<br/>
          ⮚	Estado civil.
        </p><br/><br/>
        <p className='Texto'>
          Apenas após a entregada desta documentação é possível inciar o processo de registro, junto à contabilidade. 
        </p>
      </div>
      <div className='Paginacao-Container'>
        <Numeracao num={70} />
      </div>
    </div>
  );
}