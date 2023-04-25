import '../../global_styles.css';
import './styles.css';

import cdb24 from '../../images/cdb_24.jpg';

import { Numbering } from '../Numbering';

export const Page31 = () => {
  return(
    <div className='Page Page__Container Page__Mobile Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb24} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={31} />
      </div>
    </div>
  );
}