import '../../global_styles.css';
import './styles.css';

import cdb110 from '../../images/cdb_110.png';

import { Numbering } from '../Numbering';

export const Page121 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page121__Container'>
        <img className='Page121__Img' src={cdb110} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={121} />
      </div>
    </div>
  );
}