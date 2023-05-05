import '../../global_styles.css';
import './styles.css';

import cdb28 from '../../images/cdb_28.jpg';

import { Numbering } from '../Numbering';

export const Page35 = () => {
  return(
    <div className='Page Page__Container Page__Margins'>
      <div className='Page__Book__Container'>
        <img className='Page__Book__Img' src={cdb28} alt="" />
      </div>
      <div className='Pagination__Container'>
        <Numbering num={35} />
      </div>
    </div>
  );
}