import '../../global_styles.css';
import './styles.css';

import cdb97 from '../../images/cdb_97.png';

import { Numbering } from '../Numbering';

export const Page20 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page20__Container'>
        <h1 className='Page__Text Page__Title Page__Line--Height'>
          ONDE NOS ENCONTRAR
        </h1>
        <p>
          <b className='Page__Text Page20__Text--Border'>
            Centro de Curitiba, Rua Cândido Lopes, 223 – loja 
          </b>
        </p><br/><br/>
        <img className='Page20__Img' src={cdb97} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={20} />
      </div>
    </div>
  );
}