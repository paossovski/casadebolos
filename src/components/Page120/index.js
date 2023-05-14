import '../../global_styles.css';
import './styles.css';

import cdb109 from '../../images/cdb_109.png';

import { Numbering } from '../Numbering';

export const Page120 = () => {
  return(
    <div className='Page Page__Container Page__Margins Page__Mobile'>
      <div className='Page120__Container'>
        <img className='Page120__Img' src={cdb109} alt='' />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={120} />
      </div>
    </div>
  );
}