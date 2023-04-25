import '../../global_styles.css';
import './styles.css';

import cdb22 from '../../images/cdb_22.jpg';

import { Numbering } from '../Numbering';

export const Page29 = () => {
  return(
    <div className='Page Page__Container Page__Mobile Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb22} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={29} />
      </div>
    </div>
  );
}