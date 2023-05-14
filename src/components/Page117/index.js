import '../../global_styles.css';
import './styles.css';

import cdb106 from '../../images/cdb_106.png';

import { Numbering } from '../Numbering';

export const Page117 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page117__Container'>
        <img className='Page117__Img' src={cdb106} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={117} />
      </div>
    </div>
  );
}