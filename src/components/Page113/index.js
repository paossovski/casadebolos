import '../../global_styles.css';
import './styles.css';

import cdb102 from '../../images/cdb_102.png';

import { Numbering } from '../Numbering';

export const Page113 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page113__Container'>
        <img className='Page113__Img' src={cdb102} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={113} />
      </div>
    </div>
  );
}