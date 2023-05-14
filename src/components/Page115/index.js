import '../../global_styles.css';
import './styles.css';

import cdb104 from '../../images/cdb_104.png';

import { Numbering } from '../Numbering';

export const Page115 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page115__Container'>
        <img className='Page115__Img' src={cdb104} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={115} />
      </div>
    </div>
  );
}