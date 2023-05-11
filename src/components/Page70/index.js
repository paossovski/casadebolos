import '../../global_styles.css';
import './styles.css';

import { Numbering } from '../Numbering';

export const Page70 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page70__Container'>
        <p className='Page__Text Page__Line--Height'>
          <b>Informações complementares:</b>
        </p>
        <p className='Page__Text Page__Line--Height'>
          ⮚	Cargo/função;<br/>
          ⮚	Horário de trabalho;<br/>
          ⮚	Data de início – admissão;<br/>
          ⮚	Grau de escolaridade;<br/>
          ⮚	Estado civil.
        </p><br/><br/>
        <p className='Page__Text'>
          Apenas após a entregada desta documentação é possível inciar o processo de registro, junto à contabilidade. 
        </p>
      </div>
      <div className='Pagination__Container'>
        <Numbering num={70} />
      </div>
    </div>
  );
}