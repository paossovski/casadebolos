import '../../global_styles.css';
import './styles.css';

import cdb13 from '../../images/cdb_13.jpg';
import { Numbering } from '../Numbering';

export const Page23 = () => {
  return(
    <div className='Page Page__Mobile Page__Container Page__Margins'>
      <div className='Page23__Container'>
        <img className='Page23__Img' src={cdb13} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={23} />
      </div>
    </div>
  );
}