import '../../global_styles.css';
import './styles.css';

import cdb100 from '../../images/cdb_100.png';

import { Numbering } from '../Numbering';

export const Page111 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page111__Container'>
        <img className='Page111__Img' src={cdb100} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={111} />
      </div>
    </div>
  );
}