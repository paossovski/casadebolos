import '../../global_styles.css';
import './styles.css';

import cdb29 from '../../images/cdb_29.jpg';

import { Numbering } from '../Numbering';

export const Page36 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb29} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={36} />
      </div>
    </div>
  );
}