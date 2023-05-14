import '../../global_styles.css';
import './styles.css';

import cdb103 from '../../images/cdb_103.png';

import { Numbering } from '../Numbering';

export const Page114 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page114__Container'>
        <img className='Page114__Img' src={cdb103} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={114} />
      </div>
    </div>
  );
}