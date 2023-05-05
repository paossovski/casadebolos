import '../../global_styles.css';
import './styles.css';

import cdb26 from '../../images/cdb_26.jpg';

import { Numbering } from '../Numbering';

export const Page33 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb26} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={33} />
      </div>
    </div>
  );
}