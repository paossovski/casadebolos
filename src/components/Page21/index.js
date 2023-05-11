import '../../global_styles.css';
import './styles.css';

import cdb98 from '../../images/cdb_98.png';

import { Numbering } from '../Numbering';

export const Page21 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page21__Container'>
        <h1 className='Page__Text Page__Title Page__Line--Height'>
          LOJA NOVO MUNDO CURITIBA – MODELO EXPRESS 
        </h1>
        <img className='Page21__Img' src={cdb98} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={21} />
      </div>
    </div>
  );
}